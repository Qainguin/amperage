import type { PromisifiedFS } from "@isomorphic-git/lightning-fs";
import { compressFs } from "$lib";
import { PUBLIC_CIRCUIT_URL } from "$env/static/public";

export interface BuildError {
  file: string;
  line: number;
  column: number;
  message: string;
}

export async function buildProject(
  fs: PromisifiedFS,
  log: any,
  err: any,
  finish: any = () => {},
): Promise<void> {
  // Create a WebSocket connection
  const socket = new WebSocket(PUBLIC_CIRCUIT_URL);

  let buildLog = "";

  socket.onopen = async (event) => {
    // Get the zipped data (your existing function)
    const zippedData = await compressFs(fs);

    // Send an initial message to the server with metadata
    const metadata = {
      fileName: "your_file_name.zip",
      fileSize: zippedData.byteLength,
      type: "file_upload_start",
    };
    socket.send(JSON.stringify(metadata));

    // Now, chunk and send the binary data
    let offset = 0;
    const CHUNK_SIZE = 16384; // Example chunk size
    while (offset < zippedData.byteLength) {
      const chunk = zippedData.slice(offset, offset + CHUNK_SIZE);
      socket.send(chunk);
      offset += CHUNK_SIZE;
    }

    // Signal the end of the upload.
    const endMessage = {
      type: "file_upload_end",
      fileName: "your_file_name.zip",
    };
    socket.send(JSON.stringify(endMessage));
  };

  socket.onmessage = (event) => {
    try {
      // Parse the incoming message as a JSON object
      const data = JSON.parse(event.data);

      // Check if the 'files' key exists in the message.
      // Using `Object.prototype.hasOwnProperty.call()` is a safe way to check for a key
      // that belongs directly to the object, avoiding issues with inherited properties.

      // Check for other message types
      if (data.type === "build_complete") {
        log("Build complete message received. Closing socket.");
        if (Object.prototype.hasOwnProperty.call(data, "files")) {
          log("Files received from server.");
          finish(data.files, []);
        }
        socket.close();
      } else if (data.type === "build_failed") {
        log("Build failed message received. Closing socket.");
        console.log(buildLog);
        finish(null, parseErrors(buildLog));
        socket.close();
      } else if (data.message !== "upload_started") {
        buildLog += data.message;
      }
    } catch (e) {
      err("Failed to parse message from server:", event.data);
    }
  };

  socket.onerror = (error) => {
    err("WebSocket error: ", error);
    finish();
  };

  socket.onclose = () => {
    log("Finished.");
  };
}

function parseErrors(errorLog: string): BuildError[] {
  // Regex to match error lines.
  // This version specifically captures the file path, line, column,
  // and the full error message, including any multi-line content.
  const regex =
    /^([a-zA-Z/._-]+):(\d+):(\d+):\s+error:\s+([^]+?)(?=\n[a-zA-Z/._-]+:\d+|$)/gm;

  const errors = [];
  let match;

  // Iterate through all matches found in the error log.
  while ((match = regex.exec(errorLog)) !== null) {
    // Extract the captured groups from the regex match.
    const file = match[1];
    const line = parseInt(match[2], 10);
    const column = parseInt(match[3], 10);
    // Trim the error message to remove leading/trailing whitespace.
    const message = match[4].trim();

    // Add the structured error object to our array.
    errors.push({
      file,
      line,
      column,
      message,
    });
  }

  return errors;
}
