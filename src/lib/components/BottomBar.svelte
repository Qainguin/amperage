<script lang="ts">
	import { buildProgram, type BuildOutput } from '$lib/builder';

	let { id, buildOutput = $bindable(undefined) }: { id: string; buildOutput: BuildOutput | undefined } = $props();

	let building = $state<boolean>(false);

	let buildColor = $derived.by(() => {
		if (buildOutput === undefined) return 'var(--color-editor-foreground)';
		else if (buildOutput.status === 'success') return 'var(--color-blue-500)';
		else return 'var(--color-red-500)';
	})
</script>

<div
	class="absolute bottom-0 left-0 z-10 flex h-8 w-screen flex-row items-center border-t border-editor-whitespace-foreground bg-editor-background px-2"
>
	<button
		onclick={async () => {
			if (building) return;
			building = true;

			buildOutput = undefined;
			buildOutput = await buildProgram(id);

			building = false;
		}}
		class={"cursor-pointer"}
		aria-label="Build Program"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke={buildColor}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class={building ? "wiggle": ""}
			><path
				d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"
			/><rect x="14" y="2" width="8" height="8" rx="1" /></svg
		>
	</button>
</div>


<style>
	:root{
		/* easy tuning */
		--wiggle-duration: 600ms;
		--wiggle-angle: 10deg;       /* rotate amount */
		--wiggle-offset: 0px;      /* horizontal offset */
		--wiggle-ease: cubic-bezier(.28,.84,.39,1); /* playful easing */
	}

	/* Core wiggle keyframes */
	@keyframes wiggle {
		0%   { transform: rotate(0); }
		15%  { transform: rotate(var(--wiggle-angle)); }
		30%  { transform: rotate(calc(var(--wiggle-angle) * -1)); }
		45%  { transform: rotate(calc(var(--wiggle-angle) * 0.6)); }
		60%  { transform: rotate(calc(var(--wiggle-angle) * -0.4)); }
		75%  { transform: rotate(calc(var(--wiggle-angle) * 0.2)); }
		100% { transform: rotate(0); }
	}

	/* Utility class — run once */
	.wiggle {        /* keep transforms predictable */
		transform-origin: center;       /* pivot point for rotation */
		transition: transform 120ms infinite;
		animation: wiggle calc(var(--wiggle-duration) * 1.2) var(--wiggle-ease) infinite;
	}
</style>