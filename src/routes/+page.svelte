<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_EZ, PUBLIC_JAR } from '$env/static/public';
	import { createProgramFromHandles, createProgramFromTemplate } from '$lib/creator.svelte';
	import { openDirectory } from '$lib/handler';
	import { fs } from '$lib/loader.svelte';
	import { nanoid } from '$lib';
	import type { PromisifiedFS } from '@isomorphic-git/lightning-fs';

	let { data }: { data: { programs: string[] } } = $props();

	let programs: string[] = $state(data.programs);

	$inspect(programs);

	/**
	 * Recursively creates a directory path in the virtual filesystem.
	 * @param {string} dirPath - The full directory path (e.g., '/root/include')
	 * @param {object} fs - The lightning-fs instance
	 */
	async function mkdirRecursive(dirPath: string, fs: PromisifiedFS) {
		const parts = dirPath.split('/').filter((p) => p.length > 0); // Split and remove empty strings
		let currentPath = '';

		for (const part of parts) {
			currentPath += '/' + part;
			try {
				await fs.mkdir(currentPath);
			} catch (err: any) {
				// Ignore the error if the directory already exists
				if (err.code !== 'EEXIST') {
					throw err;
				}
			}
		}
	}
</script>

<main
	class="flex h-screen flex-col overflow-y-auto bg-editor-background p-10 font-mono text-editor-foreground"
>
	<h1 class="text-4xl">Amperage</h1>
	<h2 class="text-2xl">A single spark for every robot.</h2>

	<h3 class="mt-4 text-xl">Start</h3>
	<button
		class="w-fit cursor-pointer text-start hover:underline"
		onclick={async () => {
			const handles = await openDirectory();
			if (!handles) return;

			createProgramFromHandles(handles, fs);
		}}>Open Directory</button
	>
	<button
		class="w-fit cursor-pointer text-start hover:underline"
		onclick={() => createProgramFromTemplate(PUBLIC_JAR, fs)}>Create JAR Template</button
	>
	<button
		class="w-fit cursor-pointer text-start hover:underline"
		onclick={() => createProgramFromTemplate(PUBLIC_EZ, fs)}>Create EZ Template</button
	>

	{#if programs.length > 0}
		<h3 class="mt-4 text-xl">Recent</h3>
		{#each programs as program}
			<button
				class="w-fit cursor-pointer text-start hover:underline"
				oncontextmenu={async (e) => {
					e.preventDefault();
					fs.unlink(`/${program}`);
					programs = await fs.readdir('/');
				}}
				onclick={() => goto(`/program/${program}`)}>{program}</button
			>
		{/each}
	{/if}
</main>
