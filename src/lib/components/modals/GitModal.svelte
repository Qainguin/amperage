<script lang="ts">
  import { commitChanges, stageChanges } from "$lib/gitter";
  import { log, status } from "isomorphic-git";
  import { onMount, untrack } from "svelte";
  import X from "@lucide/svelte/icons/x";

  let { modal = $bindable("") } = $props();

  let tab: string = $state("commit");

  let latestLog: string = $state("");

  const tabStyles = [
    "w-full bg-editor-foreground text-editor-background cursor-pointer py-1 rounded-md",
    "w-full bg-transparent border border-editor-whitespace-foreground hover:border-editor-hover-foreground py-1 rounded-md cursor-pointer",
  ];

  let commit = $state({
    name: "",
    email: "",
    message: "",
  });

  $effect(() => {
    if (modal === "git") {
      untrack(async () => {
        await stageChanges(window.pfs);
        latestLog = formatGitLog(
          await log({ fs: window.pfs, dir: "/" + window.projectId }),
        );
      });
    }
  });

  onMount(() => {
    commit.name = localStorage.getItem("git:username") ?? "";
    commit.email = localStorage.getItem("git:email") ?? "";
  });

  const formatGitLog = (gitLog: any) => {
    let formattedLog = "";

    for (const commit of gitLog) {
      const {
        oid,
        commit: {
          message,
          author: { name, email, timestamp },
        },
      } = commit;

      const date = new Date(timestamp * 1000).toLocaleString();

      formattedLog += `
    commit ${oid}
    Author: ${name} <${email}>
    Date:   ${date}

        ${message}
    `;
    }

    return formattedLog.trim();
  };

  $inspect(commit);
</script>

{#if modal === "git"}
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-editor-selection-background/50 z-30 grid place-items-center"
  >
    <div
      class="bg-editor-background border border-editor-whitespace-foreground text-editor-foreground font-mono rounded-lg p-4 flex flex-col gap-2"
    >
      <div class="flex flex-row items-center">
        <h1 class="text-lg">Git</h1>
        <button
          class="cursor-pointer ml-auto"
          onclick={() => {
            modal = "";
          }}
        >
          <X size={20}></X>
        </button>
      </div>
      <div class="w-full flex flex-row gap-2">
        <button
          onclick={() => (tab = "commit")}
          class={tabStyles[tab !== "commit" ? 1 : 0]}>Commit</button
        >
        <button
          onclick={() => (tab = "log")}
          class={tabStyles[tab !== "log" ? 1 : 0]}>Log</button
        >
      </div>

      {#if tab === "commit"}
        <input
          placeholder="Enter username..."
          class="border border-editor-whitespace-foreground rounded-md px-2 py-1 bg-transparent focus:ring-0 hover:border-editor-hover-foreground focus:border-editor-hover-foreground text-sm min-w-2xs"
          bind:value={commit.name}
        />
        <input
          placeholder="Enter email address..."
          class="border border-editor-whitespace-foreground rounded-md px-2 py-1 bg-transparent focus:ring-0 hover:border-editor-hover-foreground focus:border-editor-hover-foreground text-sm min-w-2xs"
          bind:value={commit.email}
        />
        <textarea
          class="border border-editor-whitespace-foreground rounded-md px-2 py-1 bg-transparent focus:ring-0 hover:border-editor-hover-foreground focus:border-editor-hover-foreground text-sm min-w-2xs aspect-[2/1]"
          placeholder="Write commit message..."
          bind:value={commit.message}
        ></textarea>
        <button
          class="border-editor-whitespace-foreground border px-2 py-1 rounded-md hover:border-editor-hover-foreground cursor-pointer"
          onclick={async () => {
            await commitChanges(window.pfs, commit);
            localStorage.setItem("git:username", commit.name);
            localStorage.setItem("git:email", commit.email);
            latestLog = formatGitLog(
              await log({
                fs: window.pfs,
                dir: "/" + window.projectId,
              }),
            );
          }}>Commit Changes</button
        >
      {:else if tab === "log"}
        <textarea
          placeholder=""
          class="border border-editor-whitespace-foreground rounded-md px-2 py-1 bg-transparent focus:ring-0 text-sm min-w-md aspect-[2/1]"
          disabled
          bind:value={latestLog}
        ></textarea>
      {/if}
    </div>
  </div>
{/if}
