<script lang="ts">
  import {
    createProjectFromDirectory,
    createProjectFromTemplate,
    createProjectFromRepo,
  } from "$lib/creator";
  import LightningFS from "@isomorphic-git/lightning-fs";
  import { nanoid } from "$lib";
  import { Buffer } from "buffer";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let projects: any[] = $state([]);

  onMount(async () => {
    window.Buffer = Buffer;
    window.fs = new LightningFS("fs");
    window.pfs = window.fs.promises;

    const fs = window.pfs;

    projects = await fs.readdir("/");
  });
</script>

<main
  class="h-screen w-screen overflow-hidden font-mono text-editor-foreground"
>
  <div class="m-8 flex flex-col">
    <h1 class="text-3xl">Amperage</h1>
    <h2 class="text-xl">A single spark for every robot.</h2>

    <div class="mt-2"></div>

    <h3 class="text-lg">Start</h3>

    <button
      class="w-fit cursor-pointer text-start hover:underline"
      onclick={async () => {
        window.Buffer = Buffer;
        window.fs = new LightningFS("fs");
        window.pfs = window.fs.promises;

        await createProjectFromDirectory(window.pfs);
      }}>Open Directory</button
    >

    <button
      class="w-fit cursor-pointer text-start hover:underline"
      onclick={async () => {
        window.Buffer = Buffer;
        window.fs = new LightningFS("fs");
        window.pfs = window.fs.promises;

        const url = prompt(
          "Enter the URL of the repository you would like to clone.",
        );

        if (!url) return;

        await createProjectFromRepo(url, window.pfs);
      }}>Clone Repo</button
    >

    <button
      class="w-fit cursor-pointer text-start hover:underline"
      onclick={async () => {
        window.Buffer = Buffer;
        window.fs = new LightningFS("fs");
        window.pfs = window.fs.promises;

        await createProjectFromTemplate("jar", window.pfs);
      }}>Create JAR Template</button
    >

    <button
      class="w-fit cursor-pointer text-start hover:underline"
      onclick={async () => {
        window.Buffer = Buffer;
        window.fs = new LightningFS("fs");
        window.pfs = window.fs.promises;

        await createProjectFromTemplate("ez", window.pfs);
      }}>Create EZ Template</button
    >

    {#if projects.length > 0}
      <h3 class="text-lg mt-2">Recent</h3>

      {#each projects as id}
        <button
          class="w-fit cursor-pointer text-start hover:underline"
          onclick={() => {
            window.Buffer = Buffer;
            window.fs = new LightningFS("fs");
            window.pfs = window.fs.promises;
            window.projectId = id;

            goto("/project/" + window.projectId);
          }}
          oncontextmenu={async (e) => {
            e.preventDefault();
            const fs = window.pfs;
            localStorage.removeItem(id);
            await fs.unlink(`/${id}`);
            projects = await fs.readdir("/");
          }}>{localStorage.getItem(id)}</button
        >
      {/each}
    {/if}

    <a class="mt-2 text-lg hover:underline cursor-pointer" href="/faq">FAQ</a>
  </div>
</main>
