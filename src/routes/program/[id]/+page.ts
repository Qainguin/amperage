import { fs, loadState } from '$lib/loader.svelte';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';
import type { PromisifiedFS } from '@isomorphic-git/lightning-fs';
export const ssr = false;

export const load: PageLoad = async ({ params }) => {
  // Load fs before page render.

  let newLoadState: { id: string; fs: PromisifiedFS | undefined } = { id: params.id, fs: undefined };
  if (get(loadState) === 'not loading') {
    newLoadState.fs = fs;
  }
  return newLoadState;
};