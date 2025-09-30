<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_EZ, PUBLIC_JAR } from '$env/static/public';
	import type { ProgramNameRecord } from '$lib';
	import { createProgramFromHandles, createProgramFromTemplate } from '$lib/creator.svelte';
	import { openDirectory } from '$lib/handler';
	import { fs } from '$lib/loader.svelte';
	import { onMount } from 'svelte';

	let { data }: { data: { programs: string[] } } = $props();

	let programs: string[] = $state(data.programs);
	let programNames: ProgramNameRecord = $state({});

	onMount(() => {
		let updatedKeys: ProgramNameRecord = {};
		for (const key in localStorage) {
			if (!key.startsWith('projects:') || typeof key !== 'string') continue;
			const id = key.replace('projects:', '');
			const name = localStorage.getItem(key);
			localStorage.removeItem(key);
			if (!id || !name) continue;
			updatedKeys[id] = name;
		}
		if (Object.keys(updatedKeys).length > 0) {
			localStorage.setItem('programNames', JSON.stringify(updatedKeys));
		}

		try {
			programNames = JSON.parse(localStorage.getItem('programNames') ?? '{}');
		} catch(err: any) {
			programNames = {};
			localStorage.setItem('programNames', JSON.stringify({}));
		}
	})

	$inspect(programNames);
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
					delete programNames[program];
					localStorage.setItem('programNames', JSON.stringify(programNames));
					programs = await fs.readdir('/');
				}}
				onclick={() => goto(`/program/${program}`)}>{programNames[program] ?? 'Unknown'}</button
			>
		{/each}
	{/if}
</main>
