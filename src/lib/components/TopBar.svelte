<script lang="ts">
	import type { ProgramNameRecord } from "$lib";
	import { onMount } from "svelte";

  let { id = '' } = $props();

  let programNames: ProgramNameRecord = $state({});

  onMount(() => {
    const localNames = localStorage.getItem('programNames');
    if (!localNames) {
      return;
    }
    programNames = JSON.parse(localNames);
  });

  $effect(() => {
    programNames;
    if (!programNames[id]) programNames[id] = "Untitled Program";
    localStorage.setItem('programNames', JSON.stringify(programNames));
  });
</script>

<div class="h-8 w-screen bg-editor-background z-10 absolute border-b border-editor-whitespace-foreground font-mono text-editor-foreground flex flex-row items-center px-2">
  <input bind:value={programNames[id]} class="p-0 m-0 bg-transparent border-none focus:ring-0" style="width: {(programNames[id] ?? 'Unknown').length}ch;"/>
</div>