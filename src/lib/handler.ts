export async function openDirectory(mode = "read"): Promise<{ files: File[]; rootName: string } | undefined> {
  // Feature detection. The API needs to be supported
  // and the app not run in an iframe.
  const supportsFileSystemAccess =
    "showDirectoryPicker" in window &&
    (() => {
      try {
        return window.self === window.top;
      } catch {
        return false;
      }
    })();

  // Define a type for the return value
  type DirectoryResult = { files: File[]; rootName: string };

  // If the File System Access API is supported…
  if (supportsFileSystemAccess) {
    let directoryStructure: DirectoryResult | undefined = undefined;

    // Recursive function that walks the directory structure.
    const getFiles = async (dirHandle: any, path = dirHandle.name): Promise<any> => {
      const dirs = [];
      const files = [];
      for await (const entry of dirHandle.values()) {
        const nestedPath = `${path}/${entry.name}`;
        if (entry.kind === "file") {
          files.push(
            entry.getFile().then((file: any) => {
              file.directoryHandle = dirHandle;
              file.handle = entry;
              return Object.defineProperty(file, "webkitRelativePath", {
                configurable: true,
                enumerable: true,
                get: () => nestedPath,
              });
            })
          );
        } else if (entry.kind === "directory") {
          dirs.push(getFiles(entry, nestedPath));
        }
      }
      return [
        ...(await Promise.all(dirs)).flat(),
        ...(await Promise.all(files)),
      ];
    };

    try {
      // Open the directory.
      const handle = await (window as any).showDirectoryPicker({
        mode,
      });

      // Get the directory structure.
      const files: File[] = await getFiles(handle, handle.name); // Await the file list

      // Construct the result object
      directoryStructure = {
        files: files,
        rootName: handle.name, // The root folder name is on the handle
      };

    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.error(err.name, err.message);
      }
      // Return undefined if an error occurred (including user cancellation)
      return undefined;
    }
    return directoryStructure;
  }

  // ---------------------------------------------------------------------
  // Fallback if the File System Access API is not supported.
  // NOTE: The fallback input approach does not reliably provide the root
  // folder name, as webkitRelativePath starts *after* the picked folder.
  // We'll use a placeholder/empty string for rootName in the fallback.
  // ---------------------------------------------------------------------
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.webkitdirectory = true;

    input.addEventListener('change', () => {
      let files = Array.from(input.files as any) as File[];

      // In the fallback, files[0].webkitRelativePath is "subfolder/file.txt"
      // not "root/subfolder/file.txt", so we can't reliably get the root name.
      // We'll return the files and an empty string for the root name.
      const fallbackResult: DirectoryResult = { files: files, rootName: "" };
      resolve(fallbackResult);
    });

    // Note: User can still cancel this which would resolve with empty files,
    // but the promise structure is slightly different here. If you want 
    // to handle cancellation more explicitly for the fallback, you'd need 
    // more code (e.g., using a custom file chooser).
    if ('showPicker' in HTMLInputElement.prototype) {
      input.showPicker();
    } else {
      input.click();
    }
  });
}