<script lang="ts">
	import { buildProgram, type BuildOutput } from '$lib/builder';
	import { connectToBrain, uploadProgram } from '$lib/uploader';
	import { V5SerialDevice } from '$lib/v5-protocol';

	let {
		id,
		buildOutput = $bindable(undefined)
	}: { id: string; buildOutput: BuildOutput | undefined } = $props();

	let device = $state<V5SerialDevice | null>(null);

	let building = $state<boolean>(false);
	let uploading = $state<boolean>(false);
	// 1. New state to track upload progress (0.0 to 1.0)
	let uploadProgress = $state<number>(0);

	let buildColor = $derived.by(() => {
		if (buildOutput === undefined) return 'var(--color-editor-foreground)';
		else if (buildOutput.status === 'success') return 'var(--color-blue-500)';
		else return 'var(--color-red-500)';
	});

	$inspect(device);
</script>

<div
	class="absolute bottom-0 left-0 z-10 flex h-8 w-screen flex-row items-center gap-2 border-t border-editor-whitespace-foreground bg-editor-background px-2"
>
	{#if uploading}
		<div class="upload-progress-bar" style:width={`${uploadProgress * 100}%`}></div>
	{/if}

	<button
		class="cursor-pointer"
		onclick={async () => {
			if (device instanceof V5SerialDevice) {
				device.disconnect();
				device = null;
			} else {
				device = await connectToBrain(() => {
					device = null;
				});
			}
		}}
	>
		{#if device instanceof V5SerialDevice}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="var(--color-editor-foreground)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-unlink-icon lucide-unlink"
				><path
					d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
				/><path
					d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"
				/><line x1="8" x2="8" y1="2" y2="5" /><line x1="2" x2="5" y1="8" y2="8" /><line
					x1="16"
					x2="16"
					y1="19"
					y2="22"
				/><line x1="19" x2="22" y1="16" y2="16" /></svg
			>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="var(--color-editor-foreground)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-link-icon lucide-link"
				><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path
					d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
				/></svg
			>
		{/if}
	</button>

	<button
		onclick={async () => {
			if (building) return;
			building = true;

			buildOutput = undefined;
			buildOutput = await buildProgram(id);

			building = false;
		}}
		class="cursor-pointer"
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
			class={building ? 'wiggle' : ''}
			><path
				d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"
			/><rect x="14" y="2" width="8" height="8" rx="1" /></svg
		>
	</button>

	{#if device instanceof V5SerialDevice}
		<button
			class="cursor-pointer"
			aria-label="Upload"
			onclick={async () => {
				if (!device || uploading) return;
				uploading = true;
				uploadProgress = 0; // Reset progress

				const uploadOutput = await uploadProgram(device, id, 2, (state, current, total) => {
					// 3. Update the progress state
					uploadProgress = current / total;
					console.log(uploadProgress);
				});

				uploading = false;
				// Optional: Reset or hold the progress bar for a moment
				setTimeout(() => (uploadProgress = 0), 500);
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="var(--color-editor-foreground)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class={uploading ? 'wiggle' : ''}
				><path d="M12 2v8" /><path d="m16 6-4 4-4-4" /><rect
					width="20"
					height="8"
					x="2"
					y="14"
					rx="2"
				/><path d="M6 18h.01" /><path d="M10 18h.01" /></svg
			>
		</button>
	{/if}
</div>

<style>
	:root {
		/* easy tuning */
		--wiggle-duration: 600ms;
		--wiggle-angle: 10deg; /* rotate amount */
		--wiggle-offset: 0px; /* horizontal offset */
		--wiggle-ease: cubic-bezier(0.28, 0.84, 0.39, 1); /* playful easing */
		--color-blue-500: #3b82f6; /* Example blue color */
	}

	/* 4. Progress Bar Styling */
	.upload-progress-bar {
		position: absolute;
		top: -1px; /* Position it to slightly cover or sit right on the top border */
		left: 0;
		height: 1px; /* Make it a thin line like a border */
		background-color: var(--color-blue-500); /* Blue fill color */
		transition: width 100ms linear; /* Smooth visual update */
		z-index: 20; /* Ensure it's above the main div's background/content but below other elements if needed */
	}

	/* Core wiggle keyframes */
	@keyframes wiggle {
		0% {
			transform: rotate(0);
		}
		15% {
			transform: rotate(var(--wiggle-angle));
		}
		30% {
			transform: rotate(calc(var(--wiggle-angle) * -1));
		}
		45% {
			transform: rotate(calc(var(--wiggle-angle) * 0.6));
		}
		60% {
			transform: rotate(calc(var(--wiggle-angle) * -0.4));
		}
		75% {
			transform: rotate(calc(var(--wiggle-angle) * 0.2));
		}
		100% {
			transform: rotate(0);
		}
	}

	/* Utility class — run once */
	.wiggle {
		/* keep transforms predictable */
		transform-origin: center; /* pivot point for rotation */
		transition: transform 120ms infinite;
		animation: wiggle calc(var(--wiggle-duration) * 1.2) var(--wiggle-ease) infinite;
	}
</style>
