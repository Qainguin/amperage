<script lang="ts">
	import type { ProgramNameRecord } from '$lib';
	import { onMount } from 'svelte';

	let { id = '', programName = $bindable('') } = $props();

	let programNames: ProgramNameRecord = $state({});

	onMount(() => {
		const localNames = localStorage.getItem('programNames');
		if (!localNames) {
			return;
		}
		programNames = JSON.parse(localNames);
		programName = programNames[id];
	});

	$effect(() => {
		programNames;
		if (!programNames[id]) programNames[id] = 'Untitled Program';
		localStorage.setItem('programNames', JSON.stringify(programNames));
		programName = programNames[id];
	});
</script>

<div
	class="absolute z-10 flex h-8 w-screen flex-row items-center border-b border-editor-whitespace-foreground bg-editor-background px-2 font-mono text-editor-foreground"
>
	<input
		bind:value={programNames[id]}
		class="m-0 border-none bg-transparent p-0 focus:ring-0"
		style="width: {(programNames[id] ?? 'Unknown').length}ch;"
	/>
</div>
