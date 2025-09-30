import type { PromisifiedFS } from "@isomorphic-git/lightning-fs";
import FS from "@isomorphic-git/lightning-fs";
import { writable, type Writable } from "svelte/store";

export const loadState: Writable<'not loading' | 'loading' | { id: string; fs: PromisifiedFS; }> = writable('not loading');
export let fs = new FS('fs').promises;