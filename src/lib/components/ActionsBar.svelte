<script lang="ts">
  import { connectToBrain, uploadProject } from "$lib/uploader";
  import Link from "@lucide/svelte/icons/link";
  import Unlink from "@lucide/svelte/icons/unlink";
  import Blocks from "@lucide/svelte/icons/blocks";
  import HardDriveDownload from "@lucide/svelte/icons/hard-drive-download";
  import { buildProject } from "$lib/builder";
  import type { BuildError } from "$lib/builder";
  import Hash from "@lucide/svelte/icons/hash";
  import SlotSelector from "./SlotSelector.svelte";

  let { errors = $bindable([]) }: { errors: BuildError[] } = $props();

  let device: any = $state(null);

  let buildState: "not-building" | "building" | "success" | "fail" =
    $state("not-building");

  let uploadState: "uploading" | "not-uploading" = $state("not-uploading");

  let selectingSlot: boolean = $state(false);
  let currentSlot: number = $state(0);
</script>

<div
  class="fixed bottom-0 flex h-8 w-screen flex-row items-center gap-2 border-t border-editor-whitespace-foreground bg-editor-background p-2 text-editor-foreground"
>
  {#if "serial" in navigator}
    <button
      class="cursor-pointer"
      onclick={async () => {
        if (device) {
          device.disconnect();
          device = null;
        } else {
          device = await connectToBrain(() => {
            device = null;
          });
        }
      }}
    >
      {#if device}
        <Unlink size={16} />
      {:else}
        <Link size={16} />
      {/if}
    </button>
  {/if}

  <button
    onclick={() => {
      buildState = "building";
      buildProject(
        window.pfs,
        (text: string) => console.log(text),
        (text: string) => console.error(text),
        (files: any, buildErrors?: BuildError[]) => {
          if (buildErrors) {
            errors = buildErrors;
          }

          if (files) buildState = "success";
          else buildState = "fail";
        },
      );
    }}
    class={`${buildState === "building" ? "build" : ""} cursor-pointer`}
  >
    <Blocks
      size={16}
      class="{buildState === 'success'
        ? 'text-[#4E4EFF]'
        : 'build'} {buildState === 'fail' ? 'text-[#FF3333]' : 'build'}"
    ></Blocks>
  </button>

  {#if device}
    <button class="cursor-pointer" onclick={() => (selectingSlot = true)}>
      <Hash size={16}></Hash>
    </button>

    <button
      class="cursor-pointer {uploadState === 'uploading' ? 'build' : ''}"
      onclick={async () => {
        uploadState = "uploading";
        if (device)
          await uploadProject(
            device,
            currentSlot,
            false,
            window.projectName,
            window.pfs,
            () => {
              uploadState = "not-uploading";
            },
          );
      }}
      oncontextmenu={async (e) => {
        e.preventDefault();
        uploadState = "uploading";
        if (device)
          await uploadProject(
            device,
            currentSlot,
            true,
            window.projectName,
            window.pfs,
            () => {
              uploadState = "not-uploading";
            },
          );
      }}
    >
      <HardDriveDownload size={16}></HardDriveDownload>
    </button>
  {/if}
</div>

{#if selectingSlot}
  <SlotSelector bind:opened={selectingSlot} bind:currentSlot></SlotSelector>
{/if}

<style>
  @keyframes building {
    0% {
      transform: rotate(-15deg);
    }

    50% {
      transform: rotate(15deg);
    }

    100% {
      transform: rotate(-15deg);
    }
  }

  .build {
    animation: building 1s infinite;
  }
</style>
