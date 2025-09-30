<script lang="ts">
	import { buildProgram, type BuildOutput } from '$lib/builder';
	import { V5SerialDevice, type V5Brain } from '$lib/v5-protocol';

	let {
		id,
		buildOutput = $bindable(undefined)
	}: { id: string; buildOutput: BuildOutput | undefined } = $props();

	let device = $state<V5SerialDevice | 'connected' | null>('connected');

	let building = $state<boolean>(false);

	let buildColor = $derived.by(() => {
		if (buildOutput === undefined) return 'var(--color-editor-foreground)';
		else if (buildOutput.status === 'success') return 'var(--color-blue-500)';
		else return 'var(--color-red-500)';
	});

	async function connectToBrain(dcCallback: () => any): Promise<V5SerialDevice | null> {
		if (!('serial' in navigator)) return null;

		let device = null;

		try {
			device = new V5SerialDevice(navigator.serial);
			const ok = await device.connect();
			if (!ok) return null;
			const conn = (device as any).connection;
			if (conn && typeof conn.on === 'function') conn.on('disconnected', dcCallback);
		} catch (err: any) {
			console.error('Connect error:', err);
		}

		return device;
	}
</script>

<div
	class="absolute bottom-0 left-0 z-10 flex h-8 w-screen flex-row items-center gap-2 border-t border-editor-whitespace-foreground bg-editor-background px-2"
>
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
		class={'cursor-pointer'}
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
</div>

<style>
	:root {
		/* easy tuning */
		--wiggle-duration: 600ms;
		--wiggle-angle: 10deg; /* rotate amount */
		--wiggle-offset: 0px; /* horizontal offset */
		--wiggle-ease: cubic-bezier(0.28, 0.84, 0.39, 1); /* playful easing */
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
