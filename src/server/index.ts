import { WebSocketServer, WebSocket } from 'ws';
import * as path from 'path';
import * as fs from 'fs';
import { readdir } from 'fs/promises';
import { rm } from 'fs/promises';
import { readFile } from 'fs/promises';
var AdmZip = require('adm-zip');

interface Issue {
  filepath: string;
  lineNumber: number;
  type: 'error' | 'warning';
  message: string;
}

// --- Configuration ---
const WS_PORT = 3001;
const OUTPUT_DIR = 'builds'; // Directory to temporarily save received ZIPs

/**
 * Ensures the output directory exists.
 */
function ensureOutputDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }
}

/**
 * Placeholder function for processing the received ZIP file data.
 * In a real application, you would unzip the data, run your 'make' compilation,
 * and then send the results back to the client.
 *
 * @param data The raw binary data (Buffer, treated as Uint8Array).
 * @param ws The WebSocket connection to potentially send results back.
 */
async function processZipFile(data: Uint8Array, ws: WebSocket): Promise<void> {
  const zipSizeKB = (data.length / 1024).toFixed(2);
  console.log(`\n[Server] Received ${zipSizeKB} KB of binary data.`);

  // 1. Save the received data (optional, for debugging/persistence)
  const timestamp = Date.now();
  const filename = `upload_${timestamp}.zip`;
  const filePath = path.join(OUTPUT_DIR, filename);

  let buildId = '';
  try {
    fs.writeFileSync(filePath, data);

    console.log(`[Server] File saved temporarily to: ${filePath.split('/').pop()}`);

    let zip = new AdmZip(filePath);
    await zip.extractAllTo("builds/", true);
    await rm(filePath, { force: true });

    console.log(`[Server] Unzipped program files to builds/[id]`)

    // 2. Compilation/Processing Logic
    console.log(`[Server] Starting 'make' compilation process...`);

    buildId = zip.getEntries()[0].entryName.split('/')[1];

    let start = performance.now();
    console.log(await runBuild(buildId));
    const compilationTimeMs = performance.now() - start;

    // 3. Send results back
    let result = {
      status: 'success',
      bin: Array.from(await readFile(`builds/${buildId}/build/${buildId}?.bin`)),
      compilationTimeMs, // Mock time
    };

    ws.send(JSON.stringify(result));
    ws.close();
    console.log(`[Server] Sent compilation result back to client.`);

  } catch (error) {
    ws.send(JSON.stringify({ status: 'error', errors: error }));
    ws.close();
    console.log(`[Server] Sent compilation errors back to client.`);
  }

  if (buildId !== '') {
    await rm(`builds/${buildId}`, {recursive: true, force: true});
  }
}

async function runBuild(buildId: string): Promise<void | Issue[]> {
  try {
    await readdir(`builds/${buildId}`);
  } catch (err: any) {
    console.error(err);
    return;
  }

  return new Promise(async (resolve, reject) => {
    const makeProcess = Bun.spawn({
      cmd: ["make", "-j", "4"],
      cwd: `builds/${buildId}`,
      stderr: 'pipe',
      stdout: 'pipe',
      async onExit(proc, exitCode) {
        if (exitCode === 0) resolve();
        else {
          const makeErr = await Bun.readableStreamToText(makeProcess.stderr);
          reject(parseCompilerOutput(makeErr));
        }
      }
    });

    const makeOut = await Bun.readableStreamToText(makeProcess.stdout);
  });
}

const ISSUE_REGEX = /^(?<filepath>[^:]+):(?<lineNumber>\d+):\d+: (?<type>error|warning): (?<message>.*)/gm;

function parseCompilerOutput(rawOutput: string): Issue[] {
  const issues: Issue[] = [];

  // Use matchAll to find all matches of the regex in the input string
  const matches = rawOutput.matchAll(ISSUE_REGEX);

  for (const match of matches) {
    let { filepath, lineNumber, type, message } = match.groups as {
      filepath: string;
      lineNumber: string; // Captured as string
      type: 'error' | 'warning';
      message: string;
    };

    // 1. Aggressively clean up the filepath from any unexpected multi-line contamination.
    // If the captured 'filepath' contains a newline, we assume the true path is the last component.
    if (filepath.includes('\n')) {
        // Split by newline, filter out empty strings, and take the last part
        const parts = filepath.split('\n').filter(p => p.trim().length > 0);
        filepath = parts[parts.length - 1];
    }
    
    // 2. Remove any leading/trailing whitespace (including non-breaking spaces)
    filepath = filepath.trim();

    if (type === 'warning') continue;

    issues.push({
      filepath: filepath,
      lineNumber: parseInt(lineNumber, 10),
      type,
      message: message.trim(),
    });
  }

  return issues;
}


// --- Server Setup ---

// Ensure the necessary directory structure is in place
ensureOutputDir();

// Initialize the WebSocket Server
const wss = new WebSocketServer({ port: WS_PORT });

// Handle new connections
wss.on('connection', function connection(ws) {
  console.log('\n[Client Connected] New client connected.');

  // Handle messages from the client
  ws.on('message', async (event) => {
    let msg = undefined;
    try {
      msg = JSON.parse(await event.toString());
    } catch (err: any) {
      console.error(err);
      return;
    }

    if (msg.type === 'bundle') {
      console.log(msg.data);
      processZipFile(new Uint8Array(msg.data), ws);
    }
  });

  // Handle connection closure
  ws.on('close', () => {
    console.log('[Client Disconnected] Client closed connection.');
  });

  // Handle errors
  ws.on('error', (error) => {
    console.error('[Client Error] An error occurred:', error);
  });

  // Initial welcome message
  ws.send(JSON.stringify({ message: `Connected to the 'make' compilation server on port ${WS_PORT}. Ready for ZIP files.` }));
});

// Handle server start listening
wss.on('listening', () => {
  console.log(`
===================================================
WebSocket Compilation Server is running!
Listening on ws://localhost:${WS_PORT}
===================================================
`);
});

// Handle server errors
wss.on('error', (error) => {
  console.error('Server error:', error);
  if ((error as any).code === 'EADDRINUSE') {
    console.error(`Port ${WS_PORT} is already in use. Please close the conflicting application.`);
  }
});

// Cleanly close the server on process exit
process.on('SIGINT', () => {
  console.log('\n[Server] Shutting down server...');
  wss.close(() => {
    console.log('[Server] WebSocket server closed successfully.');
    process.exit(0);
  });
});
