<script lang="ts">
	import FileNode from './FileNode.svelte';
	import { buildVisualFS, sortVisualFS, type VisualFSNode } from '$lib';

	interface Props {
		onFsInit: (() => any) | undefined;
		changeFile: ((entry: any) => any) | undefined;
		currentPath: string;
		contexting: any;
	}

	let { onFsInit = $bindable(), changeFile, currentPath = $bindable(), contexting = $bindable() }: Props = $props();

	let fsInitialized: boolean = $state(false);

	let visualFS: VisualFSNode[] = $state([]);

	onFsInit = async () => {
		console.log('initialized');

		const fs = window.pfs;

		fsInitialized = true;
		visualFS = sortVisualFS(await buildVisualFS(fs, '/' + window.projectId));

		if (changeFile) changeFile({ type: 'file', path: `/${window.projectId}/src/main.cpp` });
	};
</script>

<div
	class="flex h-[calc(100vh-64px)] w-full flex-col overflow-scroll bg-editor-background p-2"
>
	{#if fsInitialized}
		{#each visualFS as entry, e}
			<FileNode {changeFile} bind:contexting bind:entry={visualFS[e]} fs={window.pfs} bind:currentPath></FileNode>
		{/each}
	{/if}
</div>
