import type { PromisifiedFS } from "@isomorphic-git/lightning-fs";
import { zip } from "fflate";
import { customAlphabet } from "nanoid";

const openedDirs: string[] = ["src", "include"];

export const idAlphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

export const nanoid = customAlphabet(idAlphabet, 16);

let projectPattern = undefined;

export interface VisualFSNode {
  name: string;
  type: "file" | "dir" | "symlink";
  path: string;
  children: VisualFSNode[];
  expanded: boolean;
}

// place files you want to import through the `$lib` alias in this folder.
export async function buildVisualFS(
  fs: PromisifiedFS,
  path: string,
): Promise<VisualFSNode[]> {
  let entries;

  try {
    entries = await fs.readdir(path);
  } catch (err: any) {
    console.error(err);
    return [];
  }

  let visual: any[] = [];

  for (const entryName of entries) {
    const fullPath = path + "/" + entryName;
    const entryStats = await fs.stat(fullPath);

    const node: VisualFSNode = {
      name: entryName,
      type: entryStats.type,
      path: fullPath,
      children: [],
      expanded: false,
    };

    if (entryStats.isDirectory()) {
      if (entryName === ".git") continue;

      // Recursively call the function for directories
      node.expanded = openedDirs.includes(entryName);
      node.children = await buildVisualFS(fs, fullPath);
    }

    visual.push(node);
  }
  return visual;
}

export async function compressFs(fs: PromisifiedFS): Promise<Uint8Array> {
  const zipContents: Record<string, Uint8Array> = {};

  async function addFilesRecursively(dirPath: string) {
    const entries = await fs.readdir(dirPath);

    for (const entry of entries) {
      const fullPath = `${dirPath}/${entry}`;
      const stat = await fs.stat(fullPath);

      if (stat.isDirectory()) {
        // Correctly handle directories for nested structure
        await addFilesRecursively(fullPath);
      } else {
        const fileData = await fs.readFile(fullPath);
        // Ensure the key for the zip is the full path relative to the initial directory,
        // which creates the folder structure inside the zip
        projectPattern = new RegExp(
          "^\\/" +
          window.projectId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
          "\\/",
        );
        const relativePath = fullPath.replace(projectPattern, "");
        zipContents[relativePath] = fileData;
      }
    }
  }

  await addFilesRecursively(`/${window.projectId}`);

  console.log(zipContents);

  return new Promise((resolve, reject) => {
    {
      zip(zipContents, (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    }
  });
}

export function sortVisualFS(nodes: VisualFSNode[]): VisualFSNode[] {
  return nodes
    .map((node) => {
      if (node.type === "dir" && node.children.length > 0) {
        // Recursively sort children
        return {
          ...node,
          children: sortVisualFS(node.children),
        };
      }
      return node;
    })
    .sort((a, b) => {
      // Sort directories before files
      if (a.type === "dir" && b.type !== "dir") return -1;
      if (a.type !== "dir" && b.type === "dir") return 1;

      // Then sort alphabetically by name
      return a.name.localeCompare(b.name);
    });
}
