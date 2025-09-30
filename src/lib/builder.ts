import { PUBLIC_CIRCUIT_URL } from "$env/static/public";
import { fs } from "./loader.svelte";
import { createZip } from "littlezipper";

/**
 * Recursively gets all file paths within a directory.
 * @param dirPath The path of the directory to start from.
 * @returns A Promise that resolves to an array of absolute file paths.
 */
export async function getFilesRecursively(dirPath: string): Promise<{ path: string; data: string; }[]> {
  // 1. Read directory contents
  // Assumes fs.readdir returns an array of DirEnt objects (or similar) 
  // that have methods like isDirectory()
  const entries = await fs.readdir(dirPath);

  let files: { path: string; data: string; }[] = [];

  // 2. Iterate over each entry
  for (const entry of entries) {
    const fullPath = dirPath + "/" + entry;

    // 3 & 4. Check if it's a file
    const stat = await fs.stat(fullPath);

    if (stat.isFile() && !(fullPath.includes('.git'))) {
      files.push({ path: fullPath, data: await fs.readFile(fullPath, { encoding: 'utf8' }) });
    }
    // 5. Check if it's a directory
    else if (stat.isDirectory()) {
      // Recursively call the function and merge the results
      const subDirFiles = await getFilesRecursively(fullPath);
      files = files.concat(subDirFiles);
    }
  }

  return files;
}

// Example usage (assuming the original entry point was createBundle)
export async function createBundle(path: string): Promise<Uint8Array> {
  const allFiles = await getFilesRecursively(path);
  const zip = await createZip(allFiles);
  return zip;
}

export interface BuildOutput {
  status: string;
  bin?: ArrayBuffer;
  errors?: any[];
}

export async function buildProgram(id: string): Promise<BuildOutput | undefined> {
  return new Promise((resolve, reject) => {

    const ws = new WebSocket(PUBLIC_CIRCUIT_URL);

    let output: BuildOutput | undefined = undefined;

    ws.addEventListener('message', (event) => {
      try {
        let parsedData = JSON.parse(event.data);
        if (parsedData.status) {
          output = parsedData;
        }
      } catch(err: any) {
        console.error("Could not parse JSON.");
      }
      
    });

    ws.addEventListener('open', async (event) => {
      const bundle = await createBundle(`/${id}`);
      const bundleMsg = JSON.stringify({ type: 'bundle', data: Array.from(bundle) });
      ws.send(bundleMsg);
    });

    ws.addEventListener('close', async (event) => {
      if (event.code === 1000) {
        resolve(output);
      } else {
        reject(output);
      }
    });

    ws.addEventListener('error', (event) => {
      console.log(event);
      resolve(undefined);
    })

  });
  
}