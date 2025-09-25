# Amperage

The definitive web IDE for VEX V5 & PROS.

## Dependencies

- [@sveltejs/kit](https://www.npmjs.com/package/@sveltejs/kit)
- [@isomorphic-git/lightning-fs](https://www.npmjs.com/package/@isomorphic-git/lightning-fs)
- [@lucide/svelte](https://www.npmjs.com/package/@lucide/svelte)
- [buffer](https://www.npmjs.com/package/buffer)
- [fflate](https://www.npmjs.com/package/fflate)
- [isomorphic-git](https://www.npmjs.com/package/isomorphic-git)
- [svelte-monaco](https://www.npmjs.com/package/svelte-monaco)
- [monaco-themes](https://www.npmjs.com/package/monaco-themes)
- [nanoid](https://www.npmjs.com/package/nanoid)
- [paneforge](https://www.npmjs.com/package/paneforge)

## Developing

Once you've created a project and installed dependencies with `bun install`, start a development server:

```sh
# Run the web app server
bun run dev
# Run the compilation server
bun run dev:server
```

## Building

To create a production version of your app:

```sh
bun run build
```

You can preview the production build with `bun run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
