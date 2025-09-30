import type { PageLoad } from './$types';
import { fs, loadState } from '$lib/loader.svelte';

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
  // Load fs before page render.
  loadState.set('not loading');

  return { programs: await fs.readdir('/') };
};