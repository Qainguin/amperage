import type { PromisifiedFS } from '@isomorphic-git/lightning-fs';
import { buildProject } from './builder';

let v5Module: any;

export async function connectToBrain(dcCallback: () => any): Promise<any> {
	if (!('serial' in navigator)) return null;

	if (!v5Module) v5Module = await import('./v5-protocol');

	let device = null;

	try {

		device = new v5Module.V5SerialDevice(navigator.serial);
		const ok = await device.connect();
		if (!ok) {
			return null;
		}
		// Attach to the underlying connection's disconnected event.
		// Use a type-cast to `any` to avoid TypeScript errors because the runtime
		// `connection` property exists but may not be declared on the imported type.
		const conn = (device as any).connection;
		if (conn && typeof conn.on === 'function') {
			conn.on('disconnected', dcCallback);
		}
	} catch (e) {
		console.error('Connect error: ' + e);
	}

	return device;
}

function base64ToBin(base64String: string) {
	// Decode the Base64 string into a binary string.
	// The atob() function is a standard browser API for this.
	const binaryString = atob(base64String);

	// Create a new Uint8Array with the same length as the binary string.
	const len = binaryString.length;
	const bytes = new Uint8Array(len);

	// Iterate through the binary string and store each character's code point
	// as a byte in the Uint8Array.
	for (let i = 0; i < len; i++) {
		bytes[i] = binaryString.charCodeAt(i);
	}

	return bytes;
}

export async function uploadProject(
	device: any,
	slot: number,
	autorun: boolean,
	programName: string,
	fs: PromisifiedFS,
	finish: () => any
): Promise<void> {
	if (!device) return;

	if (!v5Module) v5Module = await import('./v5-protocol');

	const ini = new v5Module.ProgramIniConfig();
	ini.autorun = autorun;
	ini.baseName = `slot_${slot + 1}`;
	ini.project.ide = 'AMP';
	ini.program.slot = slot + 1;
	ini.program.icon = 'USER013x.bmp';
	ini.program.description = 'Uploaded via web';
	ini.program.name = programName;

	await v5Module.buildProject(
		fs,
		(text: string) => console.log(text),
		(text: string) => console.error(text),
		async (files: any) => {
			if (!device) return;

			console.log(files);
			if ('monalith' in files) {
				try {
					console.log(device.brain);
					const isDone = await device.brain.uploadProgram(
						ini,
						base64ToBin(files.monalith),
						undefined,
						(state: number, current: number, total: number) => {
							console.log(state, current, total);
						}
					);
					finish();
				} catch (e) {
					console.error('Upload failed:', e);
					finish();
				}
			} else if ('hot' in files && 'cold' in files) {
				try {
					const isDone = await device.brain.uploadProgram(
						ini,
						base64ToBin(files.hot),
						base64ToBin(files.cold),
						(state: number, current: number, total: number) => {
							console.log(state, current, total);
						}
					);
					finish();
				} catch (e) {
					console.error('Upload failed:', e);
					finish();
				}
			}
		}
	);
}
