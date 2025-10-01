import { buildProgram } from './builder';
import { ProgramIniConfig, type V5SerialConnection, V5SerialDevice } from './v5-protocol';

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

export async function uploadProgram(device: V5SerialDevice, id: string, slot: number = 2) {
	const output = await buildProgram(id);
	if (!output || !output.bin) {
		console.error('No build output');
		return;
	}
	console.log(output.bin);

	const ini = new ProgramIniConfig();
	ini.autorun = true;
	ini.baseName = 'slot_' + slot;
	ini.program.name = 'PROS Demo';
	ini.program.slot = slot - 1;
	ini.program.icon = 'USER902x.bmp';
	ini.program.description = 'Demo';

	const onProgress = (state: string, current: number, total: number): void => {
		console.log(state, current, total);
	};

	if ('cold' in output.bin && 'hot' in output.bin) {
		const hot = new Uint8Array(output.bin.hot);
		const cold = new Uint8Array(output.bin.cold);
		await device.brain.uploadProgram(ini, hot, cold, onProgress);
	} else {
		const monalith = new Uint8Array(output.bin);
		await device.brain.uploadProgram(ini, monalith, undefined, onProgress);
	}
	console.log('finished upload');
}
