<script lang="ts">
	import { fs, loadState } from '$lib/loader.svelte';
	import Entry from './Entry.svelte';

	async function getEntries(id: string) {
		const entries = await fs.readdir(`/${id}`);

		// stat each entry to check if directory
		const detailed = await Promise.all(
			entries.map(async (e) => {
				const stat = await fs.stat(`/${id}/${e}`);
				return { name: e, isDir: stat.isDirectory() };
			})
		);

		// sort: directories first, then alphabetical
		detailed.sort((a, b) => {
			if (a.isDir && !b.isDir) return -1;
			if (!a.isDir && b.isDir) return 1;
			return a.name.localeCompare(b.name);
		});

		return detailed;
	}
</script>

<div
	class="flex h-[calc(100vh-64px)] w-full flex-col overflow-y-auto p-2 pt-[7px] pr-2 font-mono text-[14px] leading-[19.6px] text-editor-foreground"
>
	{#if $loadState !== 'loading' && $loadState !== 'not loading'}
		{#await getEntries($loadState.id) then entries}
			{#each entries as e}
				{#if e.name !== '.git'}
					<Entry entry={e.name} id={$loadState.id}></Entry>
				{/if}
			{/each}
		{/await}
	{/if}
</div>
