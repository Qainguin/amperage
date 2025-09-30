<script lang="ts">
	// Importing Prism grammars
	import 'prism-code-editor/prism/languages/cpp';
	import '$lib/themes/birds.css';
	import 'prism-code-editor/layout.css';
	import { onMount, untrack } from 'svelte';
	import { createEditor, type PrismEditor } from 'prism-code-editor';
	import { defaultCommands } from 'prism-code-editor/commands';
	import { cursorPosition } from 'prism-code-editor/cursor';
	import { fs } from '$lib/loader.svelte';

	interface Props {
		code: string;
		path: string;
		editor: PrismEditor | undefined;
	}

	let {
		code = $bindable(''),
		editor = $bindable(undefined),
		path = $bindable('')
	}: Props = $props();

	let currentErrorLines = $state<HTMLDivElement[]>([]);

	onMount(async () => {
		editor = createEditor(
			'#editor',
			{
				language: 'cpp',
				value: code,
				readOnly: true
			},

			() => {}
		);

		editor.on('update', async (e: string) => {
			code = e;
			await fs.writeFile(path, e, { mode: 0o777, encoding: 'utf8' });
		});

		editor.addExtensions(defaultCommands(), cursorPosition());
	});
</script>

<div id="editor" class="grid h-[calc(100vh-32px)] w-full overflow-y-auto"></div>
