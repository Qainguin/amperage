import { goto } from "$app/navigation";
import { nanoid } from "$lib";
import type { PromisifiedFS } from "@isomorphic-git/lightning-fs";
import { initRepo, stageChanges, commitChanges, getRepoNameFromUrl } from "./gitter";
import http from "isomorphic-git/http/web";
import { log, clone } from "isomorphic-git";

export async function createProjectFromTemplate(
  template: "jar" | "comp" | "ez" | "",
  fs: PromisifiedFS,
) {
  const id = nanoid();
  window.projectId = id;

  goto(`/project/${id}`);

  localStorage.setItem(`projects:${id}`, `${template.toUpperCase()} Template`);

  try {
    const stats = await fs.stat("/setup");
    if (stats.isDirectory()) {
      console.log("setup exists.");
    }
  } catch (err: any) {
    if (err.code === "ENOENT") {
      console.log(`The folder 'setup' does not exist.`);

      let data: any;

      if (template === "jar") {
        data = await (
          await fetch(
            "https://bxpw3sizvo.ufs.sh/f/UdAfxUrQgajHfRm9JbkmirT75vkPJUSBVYWLczhgGQuCwqOo",
          )
        ).json();
      } else if (template === "ez") {
        data = await (
          await fetch(
            "https://bxpw3sizvo.ufs.sh/f/UdAfxUrQgajHqNzXa8DCOHD9rMsKo1YIgbSGJLn6B48lqdcA",
          )
        ).json();
      }

      console.log(data);

      await writeTemplateToFS(fs, "/setup", data);

      console.log("Created setup");
    } else {
      console.error("An unexpected error occurred:", err);
      throw err;
    }
  }

  await fs.rename("/setup", "/" + window.projectId);

  await initRepo(fs);
  await stageChanges(fs);
  await commitChanges(fs);

  console.log(await log({ fs, dir: `/${window.projectId}` }));
}

export async function writeTemplateToFS(
  fs: PromisifiedFS,
  baseDir = "/setup",
  input: any,
) {
  async function writeRecursive(obj: any, currentPath: string) {
    // Ensure current directory exists
    try {
      await fs.mkdir(currentPath);
    } catch (err: any) {
      if (err.code !== "EEXIST") throw err;
    }

    for (const [name, value] of Object.entries(obj)) {
      const fullPath = currentPath.endsWith("/")
        ? currentPath + name
        : currentPath + "/" + name;

      if (typeof value === "string") {
        // It's a file
        await fs.writeFile(fullPath, value, "utf8");
      } else if (typeof value === "object" && value !== null) {
        // It's a directory
        await writeRecursive(value, fullPath);
      }
    }
  }

  await writeRecursive(input, baseDir);
}

async function mkdirRecursive(fs: PromisifiedFS, dirPath: string) {
  const parts = dirPath.split("/");
  let currentPath = "";

  for (const part of parts) {
    if (part === "") continue; // Skip empty parts from leading/trailing slashes
    currentPath += "/" + part;

    try {
      await fs.stat(currentPath);
    } catch (err: any) {
      if (err.code === "ENOENT") {
        // Directory doesn't exist, so create it
        await fs.mkdir(currentPath);
      } else {
        // Other error, rethrow it
        throw err;
      }
    }
  }
}

export async function createProjectFromDirectory(fs: PromisifiedFS) {
  const id = nanoid();
  window.projectId = id;

  const handle = await (window as any).showDirectoryPicker({
    mode: "readwrite",
  });
  if (!handle) return;

  localStorage.setItem(`projects:${id}`, handle.name);

  async function* getFilesRecursively(entry: any, path = ""): any {
    if (entry.kind === "file") {
      const file = await entry.getFile();

      if (file !== null) {
        file.relativePath = (path + entry.name).replace(handle.name, "");

        yield file;
      }
    } else if (entry.kind === "directory") {
      for await (const handle of entry.values()) {
        yield* getFilesRecursively(handle, path + entry.name + "/");
      }
    }
  }

  // Create the project's root directory first
  await fs.mkdir(`/${window.projectId}`);

  for await (const fileHandle of getFilesRecursively(handle)) {
    if (fileHandle.relativePath.includes(".git")) continue;

    const splitPath: string[] = fileHandle.relativePath.split("/");
    splitPath.pop(); // Remove the file name
    const joinedPath = splitPath.join("/");

    try {
      await fs.stat(`/${window.projectId}` + joinedPath);
      console.log("found dir");
    } catch (err: any) {
      await mkdirRecursive(fs, `/${window.projectId}` + joinedPath);
      console.log("made dir", `/${window.projectId}` + joinedPath);
    }

    console.log(fileHandle.relativePath);

    await fs.writeFile(
      "/" + window.projectId + "/" + fileHandle.relativePath,
      await fileHandle.text(),
    );
  }

  goto(`/project/${window.projectId}`);
}

export async function createProjectFromRepo(url: string, fs: PromisifiedFS) {
  const id = nanoid();
  window.projectId = id;

  const dir = `/${window.projectId}`;

  await fs.mkdir(dir);

  console.log("Starting clone...");
  await clone({
    fs,
    http,
    dir,
    corsProxy: "https://cors.isomorphic-git.org",
    url,
    ref: "main",
    singleBranch: true,
    depth: 1,
  });
  console.log("Finished cloning");
  localStorage.setItem(`projects:${id}`, (getRepoNameFromUrl(url) ?? 'Unknown'));

  goto(`/project/${window.projectId}`);
}
