import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Sonda from 'sonda/sveltekit';

export default defineConfig({
	build: {
		sourcemap: true
	},
	plugins: [tailwindcss(), sveltekit(), Sonda()]
});
