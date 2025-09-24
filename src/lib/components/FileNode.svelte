<script lang="ts">
  import type { PromisifiedFS } from "@isomorphic-git/lightning-fs";
  import ChevronDown from "@lucide/svelte/icons/chevron-down";
  import FileNode from "./FileNode.svelte";
  import type { BuildError } from "$lib/builder";

  interface Props {
    entry: any;
    fs: PromisifiedFS;
    changeFile: ((entry: any) => any) | undefined;
    currentPath: string;
    contexting: any;
    errors: BuildError[];
  }

  let {
    entry = $bindable(),
    fs,
    changeFile,
    currentPath = $bindable(),
    contexting = $bindable(),
    errors = $bindable(),
  }: Props = $props();

  let node: HTMLElement | undefined = $state(undefined);

  function onContextMenu(e: MouseEvent) {
    console.log(e);
    e.preventDefault();
    contexting = { left: e.x, top: e.y };
  }

  function isFileError() {
    console.log("checking errors");
    for (let e = 0; e < errors.length; e++) {
      const err = errors[e];

      const relativeFile = entry.path.replace(`/${window.projectId}/`, "");

      console.log(relativeFile, err.file);
      if (relativeFile === err.file) {
        return true;
      } else continue;
    }
    return false;
  }
</script>

<div class="font-mono text-sm text-editor-foreground">
  <button
    oncontextmenu={onContextMenu}
    bind:this={node}
    onclick={() => {
      if (!changeFile) return;

      if (entry.type === "file") changeFile(entry);
      else if (entry.type === "dir") entry.expanded = !entry.expanded;
    }}
    class="flex w-full cursor-pointer flex-row items-center rounded-md px-1 py-0.5 text-start {currentPath ===
    entry.path
      ? 'bg-editor-selection-background/50'
      : 'hover:bg-editor-line-highlight-background/25'}"
  >
    <span>
      {#if entry.type === "file" && isFileError()}
        <span class="text-[#FF3333]">!</span>
      {/if}
      {entry.name}
    </span>
    {#if entry.type === "dir"}
      <ChevronDown
        class={`ml-auto ${entry.expanded ? "" : "-rotate-90"}`}
        size={16}
      ></ChevronDown>
    {/if}
  </button>

  {#if entry.type === "dir" && entry.children}
    <div style="padding-left: 1rem;">
      {#if entry.expanded}
        {#each entry.children as childEntry, c}
          <FileNode
            bind:contexting
            bind:entry={entry.children[c]}
            {fs}
            {changeFile}
            bind:currentPath
            bind:errors
          />
        {/each}
      {/if}
    </div>
  {/if}
</div>
