<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		opened: boolean;
		currentSlot: number;
	}

	let { opened = $bindable(), currentSlot = $bindable(0) }: Props = $props();

	let slotSelector: HTMLDivElement | null = $state(null);

	let slotSelectionRect: DOMRect = new DOMRect(0, 0, 0, 0);

	let slotsMap = ['rounded-l-lg', '', '', '', '', '', '', 'rounded-r-lg'];

	onMount(() => {
		slotSelectionRect = slotSelector!.getBoundingClientRect();
		console.log(slotSelectionRect);
	});

	function onPointerDown(e: PointerEvent): void {
		if (e.x > slotSelectionRect.x && e.x < slotSelectionRect.x + slotSelectionRect.width) {
			if (e.y > slotSelectionRect.y && e.y < slotSelectionRect.y + slotSelectionRect.height) {
				return;
			}
		}

		opened = false;
	}
</script>

<div class="fixed bottom-8 left-4" bind:this={slotSelector}>
	<div
		class="bottom-2 flex h-8 w-52 flex-row rounded-lg border border-editor-selection-background bg-editor-selection-background/25 font-mono text-editor-foreground backdrop-blur-xs transition-all"
	>
		{#each { length: 8 } as _, slot}
			<button
				onclick={() => {
					currentSlot = slot;
					opened = false;
				}}
				class="h-full w-full cursor-pointer {slotsMap[
					slot
				]} hover:bg-editor-line-highlight-background/50 {slot === currentSlot
					? 'bg-editor-selection-background/75'
					: ''}">{slot + 1}</button
			>
		{/each}
	</div>
	<svg
		class="absolute left-10 z-10 aspect-square w-8"
		fill="var(--color-editor-selection-background)"
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"><path d="M0 0 8 8 16 0" /></svg
	>
</div>

<svelte:window onpointerdown={onPointerDown} />
