import type { PageLoad } from './$types';
import { fs } from '$lib/loader.svelte';

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
  // Load fs before page render.

  return { programs: await fs.readdir('/') };
};