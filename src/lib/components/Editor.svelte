<script lang="ts">
	// Importing Prism grammars
	import 'prism-code-editor/prism/languages/cpp';
	import '$lib/themes/birds.css';
	import 'prism-code-editor/layout.css';
	import 'prism-code-editor/guides.css';
	import { onMount, untrack } from 'svelte';
	import { createEditor, type PrismEditor } from 'prism-code-editor';
	import { defaultCommands } from 'prism-code-editor/commands';
	import { cursorPosition } from 'prism-code-editor/cursor';
	import { fs } from '$lib/loader.svelte';
	import type { BuildOutput, Issue } from '$lib/builder';
	import { indentGuides } from 'prism-code-editor/guides';

	interface Props {
		code: string;
		path: string;
		editor: PrismEditor | undefined;
		buildOutput: BuildOutput | undefined;
		id: string;
	}

	let {
		code = $bindable(''),
		editor = $bindable(undefined),
		path = $bindable(''),
		buildOutput = $bindable(undefined),
		id = ''
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

		editor.addExtensions(defaultCommands(), cursorPosition(), indentGuides());
	});

	function cleanErrors() {
		currentErrorLines.forEach((errLine) => {
			errLine.classList.remove('error-line');
		});
		currentErrorLines.length = 0;
	}

	$effect(() => {
		if (!buildOutput) return;
		untrack(() => {
			cleanErrors();

			if (buildOutput.errors) {
				const errors = buildOutput.errors;

				for (let e = 0; e < errors.length; e++) {
					const err: Issue = errors[e];

					if (err.filepath.replace(`/${id}`, '') !== path)
						editor!.lines[err.lineNumber].classList.add('error-line');
					currentErrorLines.push(editor!.lines[err.lineNumber]);
				}
			}
		});
	});
</script>

<div id="editor" class="grid h-[calc(100vh-64px)] w-full overflow-y-auto"></div>
