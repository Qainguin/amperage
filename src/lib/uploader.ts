import { buildProgram, type BuildOutput } from './builder';
import { ProgramIniConfig, type V5SerialConnection, V5SerialDevice } from './v5-protocol';

function base64ToUint8Array(base64: string): Uint8Array {
	// Use atob() to decode the base64 string into a binary string
	const binaryString = atob(base64);
	const len = binaryString.length;
	const bytes = new Uint8Array(len);

	// Convert the binary string to a Uint8Array
	for (let i = 0; i < len; i++) {
		bytes[i] = binaryString.charCodeAt(i);
	}
	return bytes;
}

export async function connectToBrain(dcCallback: () => any): Promise<V5SerialDevice | null> {
	if (!('serial' in navigator)) return null;

	let device = null;

	try {
		const serial = navigator.serial as any;
		device = new V5SerialDevice(serial);
		const ok = await device.connect();
		if (!ok) return null;
		const conn = (device as any).connection as V5SerialConnection;
		conn.on('disconnected', dcCallback);
	} catch (err: any) {
		console.error('Connect error:', err);
	}

	return device;
}

export async function uploadProgram(
	buildOutput: any,
	device: V5SerialDevice,
	name: string = 'Web Upload',
	id: string,
	slot: number = 2,
	onProgress: (state: string, current: number, total: number) => any
) {
	console.log(device.isConnected);
	let output: BuildOutput | undefined = buildOutput;
	if (!output || !output.bin) {
		output = await buildProgram(id);
	}

	if (!output || !output.bin) return;

	onProgress('START', 0, 1);

	const ini = new ProgramIniConfig();
	ini.autorun = true;
	ini.baseName = 'slot_' + slot;
	ini.project.ide = 'AMP';
	ini.program.name = name;
	ini.program.slot = slot - 1;
	ini.program.icon = typeof output.bin === 'string' ? 'USER926x.bmp' : 'USER902x.bmp';
	ini.program.description = 'This project was uploaded through amperage.dev';

	try {
		if (typeof output.bin === 'object' && 'cold' in output.bin && 'hot' in output.bin) {
			const hot = base64ToUint8Array(output.bin.hot);
			const cold = base64ToUint8Array(output.bin.cold);
			await device.brain.uploadProgram(ini, hot, cold, onProgress);
		} else {
			const monalith = base64ToUint8Array(output.bin);
			await device.brain.uploadProgram(ini, monalith, undefined, onProgress);
		}
		await device.reconnect();
		return 0;
	} catch (err: any) {
		console.error(err);
		return err;
	}
}
