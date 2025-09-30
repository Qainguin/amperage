// place files you want to import through the `$lib` alias in this folder.
import { customAlphabet } from "nanoid";
import { fs } from "./loader.svelte";
import type { PromisifiedFS } from "@isomorphic-git/lightning-fs";
import { createZip } from "littlezipper";

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
export const nanoid = customAlphabet(alphabet, 14);

export interface ProgramTemplate {
  [key: string]: string | ProgramTemplate;
}

export function getDirectoryFromPath(filePath: string): string {
  // Find the last occurrence of the path separator
  const lastSeparatorIndex: number = filePath.lastIndexOf('/');

  // If a separator is found, return the substring up to that point
  if (lastSeparatorIndex !== -1) {
    return filePath.substring(0, lastSeparatorIndex);
  }

  // If no slash is found (e.g., just 'filename.txt'), return an empty string or '.' 
  // depending on the desired convention. We'll return an empty string for simplicity here.
  return '';
}

export async function sortEntries(path: string, id: string): Promise<string[]> {
  const entries = await fs.readdir(path);

  const stats = await Promise.all(
    entries.map(async (name) => {
      const fullPath = `${path}/${name}`;
      const stat = await fs.stat(`/${id}${fullPath}`);
      return { name, isDir: stat.isDirectory() };
    })
  );

  return stats
    .sort((a, b) => {
      // Directories first
      if (a.isDir && !b.isDir) return -1;
      if (!a.isDir && b.isDir) return 1;
      // Alphabetical within groups
      return a.name.localeCompare(b.name);
    })
    .map((e) => e.name);
}