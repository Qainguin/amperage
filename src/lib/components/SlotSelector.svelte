<script lang="ts">
	let { slot = $bindable(1), selectingSlot = $bindable(false), slotSelectorRect } = $props();

	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			// Check if the click happened outside the node
			if (node && !node.contains(event.target as Node) && selectingSlot) {
				selectingSlot = false;
			}
		};

		// Attach the listener to the document body
		document.addEventListener('click', handleClick, true); // 'true' for capture phase

		// Cleanup function runs when the component is destroyed
		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

{#if selectingSlot}
	<div
		use:clickOutside
		class="absolute bottom-[40px] left-19 flex aspect-[8/1] h-10 flex-row items-center justify-around overflow-hidden rounded-lg border border-editor-whitespace-foreground bg-editor-background font-mono text-editor-foreground shadow-lg"
	>
		{#each { length: 8 }, slotIdx}
			<button
				aria-label="Slot {slotIdx + 1}"
				class="h-full w-full cursor-pointer hover:bg-editor-selection-background/25 {slot ===
				slotIdx + 1
					? 'bg-editor-selection-background/50'
					: ''}"
				onclick={() => {
					slot = slotIdx + 1;
					selectingSlot = false;
				}}>{slotIdx + 1}</button
			>
		{/each}
	</div>
{/if}
