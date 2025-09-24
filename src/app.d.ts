// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import type { PromisifiedFS, FS } from '@isomorphic-git/lightning-fs';

declare global {
	interface Window {
		Buffer: any;
		fs: FS;
		pfs: PromisifiedFS;
		projectName: string;
		projectId: string;
	}
}

export {};
