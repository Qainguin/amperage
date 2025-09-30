<script lang="ts">
	import type { BuildOutput } from '$lib/builder';
	import BottomBar from '$lib/components/BottomBar.svelte';
	import Editor from '$lib/components/Editor.svelte';
	import Explorer from '$lib/components/Explorer.svelte';
	import { fs, loadState } from '$lib/loader.svelte';
	import type { PromisifiedFS } from '@isomorphic-git/lightning-fs';
	import type { PrismEditor } from 'prism-code-editor';
	import { setContext } from 'svelte';

	let { data }: { data: { id: string; fs: PromisifiedFS } | undefined } = $props();

	let id: string = $state('');
	let path: string = $state('');

	let code: string = $state('');
	let editor: PrismEditor | undefined = $state(undefined);

	let buildOutput: BuildOutput | undefined = $state(undefined);

	const loadUnsubscribe = loadState.subscribe(async (val) => {
		if (val !== 'loading' && val !== 'not loading') {
			id = val.id;

			code = await fs.readFile(`/${id}/src/main.cpp`, { encoding: 'utf8' });
			path = `/${id}/src/main.cpp`;
			if (editor) {
				editor.setOptions({ readOnly: false });
				editor.textarea.value = code;
				editor.update();
			}
			loadUnsubscribe();
		}
	});

	async function changeFile(newPath: string) {
		if (!editor) return;
		path = `/${id}/${newPath}`;
		code = await fs.readFile(path, { encoding: 'utf8' });
		editor.textarea.value = code;
		editor.update();
	}

	if (data!.fs) loadState.set(data!);
	setContext('change-file', changeFile);

	$inspect(buildOutput);
</script>

<main class="h-screen bg-editor-background">
	<div class="flex h-screen flex-row">
		<Explorer></Explorer>
		<Editor bind:code bind:path bind:editor></Editor>
	</div>
</main>

<BottomBar {id} bind:buildOutput></BottomBar>
