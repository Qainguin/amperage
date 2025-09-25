<script lang="ts">
  import FileNode from "./FileNode.svelte";
  import { buildVisualFS, sortVisualFS, type VisualFSNode } from "$lib";
  import type { BuildError } from "$lib/builder";

  interface Props {
    onFsInit: (() => any) | undefined;
    updateVisualFS: (() => any) | undefined;
    changeFile: ((entry: any) => any) | undefined;
    currentPath: string;
    contexting: any;
    errors: BuildError[];
  }

  let {
    onFsInit = $bindable(),
    updateVisualFS = $bindable(),
    changeFile,
    currentPath = $bindable(),
    contexting = $bindable(),
    errors = $bindable([]),
  }: Props = $props();

  let fsInitialized: boolean = $state(false);

  let visualFS: VisualFSNode[] = $state([]);

  onFsInit = async () => {
    console.log("initialized");

    const fs = window.pfs;

    fsInitialized = true;
    visualFS = sortVisualFS(await buildVisualFS(fs, "/" + window.projectId));

    if (visualFS.length === 0) return;

    if (changeFile)
      changeFile({ type: "file", path: `/${window.projectId}/src/main.cpp` });
  };

  updateVisualFS = async () => {
    const fs = window.pfs;
    const baseFS = await buildVisualFS(fs, `/${window.projectId}/`);
    visualFS = sortVisualFS(baseFS);
  };
</script>

<div
  class="flex h-[calc(100vh-64px)] w-full flex-col overflow-scroll bg-editor-background p-2"
>
  {#if fsInitialized}
    {#each visualFS as entry, e}
      <FileNode
        {changeFile}
        bind:contexting
        bind:entry={visualFS[e]}
        fs={window.pfs}
        bind:currentPath
        bind:errors
      ></FileNode>
    {/each}
  {/if}
</div>
