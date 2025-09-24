// svelte.config.js
import adapter from "@jesterkit/exe-sveltekit";

export default {
  kit: {
    adapter: adapter({
      binaryName: "Amperage",
      target: "linux-x64",
    }),
  },
};
