import { goto } from "$app/navigation";
import type { PromisifiedFS } from "@isomorphic-git/lightning-fs";
import { getDirectoryFromPath, nanoid, type ProgramTemplate } from "$lib";
import { loadState } from "./loader.svelte";

export async function createProgramFromHandles(handles: { files: File[]; rootName: string }, fs: PromisifiedFS): Promise<void> {
  loadState.set('loading');

  const id = nanoid();

  goto(`/program/${id}`);

  const root = handles.rootName;
  const fileHandles = handles.files;

  await fs.mkdir(`/${id}`);

  // 1. Use map() to transform the array of files into an array of Promises
  const fileCreationPromises = fileHandles.map(async (file) => {
    // Note: The original code used a file as `any` to access `handle.name`.
    // Assuming 'name' is directly on the File object as it often is, or adjust as necessary.
    const fileName = file.name; // Using file.name instead of (file as any).handle.name for simplicity

    // The logic for relativePath, dirPath, mkdirRecursive, and writeFile is preserved
    const relativePath = file.webkitRelativePath.replace(root, `/${id}`);
    const dirPath = relativePath.replace(`/${fileName}`, '');

    await mkdirRecursive(dirPath, fs);
    await fs.writeFile(relativePath, await file.text());
  });

  // 2. Use Promise.all() to wait for all file creation Promises to resolve
  await Promise.all(fileCreationPromises);
  await setProgramName(id, "Untitled Program");

  loadState.set({ id, fs });
}

export async function createProgramFromTemplate(url: string, fs: PromisifiedFS): Promise<void> {
  const start = performance.now();
  loadState.set('loading');

  const id = nanoid();

  await goto(`/program/${id}`);

  console.log("[CREATOR] Setting up program FS...");

  // Once in 119 Trillion ids, it will already exist.
  try {
    await fs.mkdir(`/${id}`);
  } catch (err: any) {
    console.log("[CREATOR] Wow, you're lucky.")
    await goto('/');
    return;
  }


  console.log("[CREATOR] Fetching template from:", url);

  let data: ProgramTemplate | undefined = undefined;
  try {
    let response = await fetch(url);
    data = await response.json();
  } catch (err: any) {
    console.error("[CREATOR]", err.message);
    await goto('/');
    return;
  }
  if (!data) return;

  console.log("[CREATOR] Writing to FS...");

  await templateWalk(fs, data, `/${id}`);
  await setProgramName(id, "Untitled Program");

  console.log("[CREATOR] Finished creating template in", performance.now() - start, "ms.");

  loadState.set({ id, fs });
}

async function templateWalk(
  fs: PromisifiedFS,
  template: ProgramTemplate,
  currentPath: string = ""
): Promise<void> {
  // Get all keys of the current level of the template
  const keys = Object.keys(template);

  // Loop through each key-value pair at the current level
  for (const key of keys) {
    // We cast to ProgramTemplate[keyof ProgramTemplate] to handle the mixed type of the indexer
    const value: string | ProgramTemplate = template[key];

    // Construct the new path for the current key.
    const newPath = currentPath === "" ? key : `${currentPath}/${key}`;
    try {
      await fs.stat(getDirectoryFromPath(newPath));
    } catch (err: any) {
      await fs.mkdir(getDirectoryFromPath(newPath));
    }

    // Check if the value is a string or another ProgramTemplate object
    if (typeof value === 'string') {
      // Base Case: File content found. Use 'await' for the async file write.
      try {
        await fs.writeFile(newPath, value);
      } catch (error) {
        // Essential error handling for file system operations
        console.error(`[WALKER] Error writing file ${newPath}:`, error);
      }

    } else {
      // Recursive Step: Nested directory structure. 
      // Use 'await' on the recursive call to ensure files are processed sequentially.
      await templateWalk(fs, value, newPath);
    }
  }
}

async function mkdirRecursive(dirPath: string, fs: PromisifiedFS): Promise<void> {
  // 1. Normalize the path (optional but good practice)
  const normalizedPath = dirPath.replace(/\\/g, '/');
  const parts = normalizedPath.split('/').filter(part => part.length > 0);

  // 2. The base path for creating directories
  let currentPath = '';

  for (const part of parts) {
    currentPath += (currentPath.length > 0 ? '/' : '') + part;

    try {
      await fs.mkdir(`/${currentPath}`);
    } catch (err: any) {
      if (err.message !== 'EEXIST') {
        console.error(err.message);
      }
    }
  }
}

async function setProgramName(id: string, newName: string) {
  try {
    const localNames = localStorage.getItem('programNames') ?? '{}';
    const programNames = JSON.parse(localNames);
    programNames[id] = newName;
    console.log("names:", programNames);
    localStorage.setItem('programNames', JSON.stringify(programNames));
  } catch(err: any) {
    console.error(err);
  }
}