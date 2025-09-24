<script lang="ts">
	import Monaco, { exportedThemes } from 'svelte-monaco';
	import { onMount, untrack } from 'svelte';
	import Explorer from '$lib/components/Explorer.svelte';
	import ContextMenu from '$lib/components/ContextMenu.svelte';
	import { Buffer } from 'buffer';
	import LightningFS from '@isomorphic-git/lightning-fs';
	import ActionsBar from '$lib/components/ActionsBar.svelte';
	import Codebar from '$lib/components/Codebar.svelte';
	import { createProjectFromTemplate } from '$lib/creator.js';
	import { goto } from '$app/navigation';
	import { Pane, PaneGroup, PaneResizer } from 'paneforge';

	let { data } = $props();

	let onFsInit: (() => any) | undefined = $state(undefined);

	let theme = $state('birds-of-paradise');

	let projectName = $state('');

	let changeFile = $state(async (entry: any) => {
		const text = await window.pfs.readFile(entry.path, { encoding: 'utf8' });

		code = text;
		currentPath = entry.path;
	});

	let contexting: any = $state(null);

	onMount(async () => {
		console.log(exportedThemes);

		if (!window.fs) {
			window.Buffer = Buffer;
			window.fs = new LightningFS('fs');
			window.pfs = window.fs.promises;
			window.projectId = data.id;
			try {
				const root = await window.pfs.readdir('/' + window.projectId);
				if (root.length === 0) {
					console.log('nothing there');
				} else console.log('loaded fs');
			} catch (err: any) {
				if (err.message.includes('ENOENT')) {
					goto('/');
					return;
				}
			}
		} else {
			console.log('fs already initialized');
		}

		if (onFsInit) onFsInit();
		projectName = localStorage.getItem(data.id) ?? 'Web Upload';
	});

	// this is fully reactive! setting value to another string will change the editor accordingly
	let code = $state('');
	let currentPath = $state('');

	$effect(() => {
		currentPath;
		code;
		untrack(() => {
			if (currentPath === '') return;
			window.pfs.writeFile(currentPath, code);
			console.log('wrote to file');
		});
	});
</script>

<div class="absolute top-8 flex flex-row w-screen">
	<PaneGroup direction="horizontal" autoSaveId="editorPanes">
		<Pane defaultSize={16.67} minSize={7.5}>
			<Explorer bind:contexting bind:onFsInit {changeFile} bind:currentPath></Explorer>
		</Pane>
		<PaneResizer class="z-25"></PaneResizer>
		<Pane defaultSize={83.33} minSize={35}> 
			<div id="editor" class="h-[calc(100vh-64px)] w-full">
				<!-- event.detail is the monaco instance. All options are reactive! -->
				<Monaco
					options={{ language: 'cpp', automaticLayout: true, fontFamily: 'JetBrains Mono', tabSize: 2 }}
					{theme}
					bind:value={code}
				/>
			</div>
		</Pane>
	</PaneGroup>
</div>

<ActionsBar></ActionsBar>
<Codebar bind:projectName></Codebar>

<ContextMenu bind:contexting></ContextMenu>