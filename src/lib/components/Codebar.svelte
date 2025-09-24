<script lang="ts">
  import GitBranch from "@lucide/svelte/icons/git-branch";

  let { projectName = $bindable("Web Upload"), modal = $bindable("") } =
    $props();

  $effect(() => {
    window.projectName = projectName;
    if (projectName !== "") {
      console.log("code:" + window.projectId);
      localStorage.setItem(`projects:${window.projectId}`, projectName);
    }
  });

  function onEnter() {
    (document.activeElement as HTMLElement).blur();
  }
</script>

<div
  class="fixed top-0 left-0 z-20 flex h-8 w-screen flex-row items-center border-b border-editor-whitespace-foreground bg-editor-background px-2 font-mono text-editor-foreground"
>
  <input
    bind:value={projectName}
    class="rounded-md border-none bg-transparent px-1 py-0.5"
    style="width: {projectName.length + 1}ch;"
    onkeydown={(e) => {
      if (e.key === "Enter") onEnter();
    }}
  />

  <button class="cursor-pointer ml-auto" onclick={() => (modal = "git")}>
    <GitBranch size={20}></GitBranch>
  </button>
</div>
