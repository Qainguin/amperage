<script lang="ts">
  import type { PromisifiedFS } from "@isomorphic-git/lightning-fs";

  let {
    contexting = $bindable(),
    updateVisualFS = $bindable(),
  }: {
    contexting: any;
    updateVisualFS: (() => any) | undefined;
  } = $props();

  let context: HTMLDivElement | undefined = $state(undefined);

  let fs: PromisifiedFS | undefined = $state(undefined);

  async function fsDelete() {
    if (!fs) fs = window.pfs;
    if (!updateVisualFS) return;

    console.log("delete ", contexting.path);
    await fs.unlink(contexting.path);
    updateVisualFS();
    contexting = null;
  }

  async function fsRename() {
    if (!fs) fs = window.pfs;
    console.log("rename");
    contexting = null;
  }

  async function fsNewFile() {
    if (!fs) fs = window.pfs;
    console.log("new file");
    contexting = null;
  }

  async function fsNewFolder() {
    if (!fs) fs = window.pfs;
    console.log("new folder");
    contexting = null;
  }
</script>

{#if contexting}
  <div
    class="fixed z-50 w-fit flex flex-col rounded-lg bg-editor-background border border-editor-whitespace-foreground font-mono text-sm text-editor-foreground text-start p-2"
    style="left: {contexting.left}px; top: {contexting.top}px;"
    bind:this={context}
  >
    <button
      class="text-start rounded-sm hover:bg-editor-selection-background cursor-pointer px-1 py-0.5"
      onclick={fsRename}>Rename File</button
    >
    <button
      class="text-start rounded-sm hover:bg-editor-selection-background cursor-pointer px-1 py-0.5"
      onclick={fsDelete}>Delete File</button
    >
    <div class="h-[1px] w-full bg-editor-whitespace-foreground my-1"></div>
    <button
      class="text-start rounded-sm hover:bg-editor-selection-background cursor-pointer px-1 py-0.5"
      onclick={fsNewFile}>New File</button
    >
    <button
      class="text-start rounded-sm hover:bg-editor-selection-background cursor-pointer px-1 py-0.5"
      onclick={fsNewFolder}>New Folder</button
    >
  </div>
{/if}

<svelte:window
  onmousedown={async (e: MouseEvent) => {
    if (!context) return;
    const rect = context.getBoundingClientRect();
    if (e.x > rect.left && e.x < rect.left + rect.width) {
      if (e.y > rect.top && e.y < rect.top + rect.height) {
        return;
      }
    }

    contexting = null;
  }}
/>
