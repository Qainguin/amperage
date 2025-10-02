<script lang="ts">
	import Entry from './Entry.svelte';
	import { fs } from '$lib/loader.svelte';
	import { getContext } from 'svelte';

	let { entry, id, path }: { entry: string; id: string; path: string } = $props();

	let stat = await fs.stat(`/${id}/${entry}`);

	let expanded: boolean = $state(false);

	// helper: list children, directories first, then alphabetical
	async function getEntries(path: string): Promise<string[]> {
		const entries = await fs.readdir(path);

		const detailed = await Promise.all(
			entries.map(async (e) => {
				const s = await fs.stat(`${path}/${e}`);
				return { name: e, isDir: s.isDirectory() };
			})
		);

		detailed.sort((a, b) => {
			if (a.isDir && !b.isDir) return -1;
			if (!a.isDir && b.isDir) return 1;
			return a.name.localeCompare(b.name);
		});

		return detailed.map((d) => d.name);
	}

	const changeFile: any = getContext('change-file');
</script>

<div class="flex flex-col">
	<button
		class="flex cursor-pointer flex-row text-start {`/${id}/${entry}` === path
			? 'bg-editor-selection-background/50'
			: 'hover:bg-editor-line-highlight-background/25'}"
		onclick={() => {
			if (stat.isDirectory()) {
				expanded = !expanded;
			} else if (stat.isFile()) {
				changeFile(entry);
			}
		}}
	>
		{entry.split('/').slice(-1)[0]}
		{#if stat.isDirectory()}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="var(--color-editor-foreground)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="ml-auto"
				style="rotate: {expanded ? 0 : -90}deg;"><path d="m6 9 6 6 6-6" /></svg
			>
		{/if}
	</button>

	{#if stat.isDirectory() && expanded}
		{#await getEntries(`/${id}/${entry}`) then entries}
			{#each entries as e}
				<div class="ml-4">
					<Entry entry={entry + '/' + e} {id} {path}></Entry>
				</div>
			{/each}
		{/await}
	{/if}
</div>
