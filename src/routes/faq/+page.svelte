<script lang="ts">
</script>

<main class="fixed top-0 left-0 h-screen w-screen overflow-y-auto bg-editor-background">
	<div class="blog-post py-12">
		<h1 class="flex flex-row items-center gap-2">
			FAQ
			<a href="/" class="ml-auto" aria-label="Home">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke="var(--color-editor-foreground)"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path
						d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
					/></svg
				>
			</a>
		</h1>
		<hr />
		<h2>
			Why use this instead of <a class="text-sky-400" href="https://codev5.vex.com">VEXcode V5</a>?
		</h2>
		<p>
			There are several reasons to choose this editor over regular VEXcode V5. Here are some of
			them:
		</p>
		<ul class="ml-12 list-disc">
			<li>Better Editing for Chromebooks</li>
			<li>Multi-file Editing</li>
			<li>PROS Editing, Building & Uploading</li>
			<li>
				Full Git Integration with <a href="https://www.npmjs.com/package/isomorphic-git"
					>isomorphic-git</a
				>.
			</li>
			<li>
				Template Support (<a href="https://jacksonarearobotics.github.io/JAR-Template/">JAR</a>
				& <a href="https://ez-robotics.github.io/EZ-Template/">EZ</a>)
			</li>
		</ul>

		<h2>What are the minimum system requirements?</h2>
		<p>
			You will need a <a href="https://www.chromium.org/chromium-projects/">Chromium</a>-based
			browser. That's about it really.
		</p>

		<h2>What languages are supported?</h2>
		<p>
			To start, this project will support C++ only. I will be adding Python (and possibly <a
				href="https://vexide.dev">vexide</a
			>) at a later date.
		</p>

		<h2>How do I connect to the VEX V5 Brain?</h2>
		<p>
			To connect, click on the link icon in the very bottom-left of the screen. Then a popup should
			appear, asking you what device to connect to. For this, choose the first Brain option.
			Finally, press connect. You should now be connected.
		</p>

		<h2>When is autocomplete coming?</h2>
		<p>I'm not really sure. Probably before the end of the High Stakes (2025-26) season.</p>

		<h2>Why aren't other browsers supported for brain connections?</h2>
		<p>
			This project only supports <a href="https://www.chromium.org/chromium-projects/">Chromium</a
			>-based browsers for brain connections because it is the only engine that supports the<br />
			<a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API">Web Serial API</a>.
			This is the API that allows for connection between the browser and serial devices.
		</p>

		<h2>Will there be offline support for builds/uploads?</h2>
		<p>
			As of right now, there are no viable C++ compilers that can be used entirely client-side on
			the web. So, right now offline build/upload support is impossible. If you know a way to do
			this, please contact me or open a pull request on GitHub.
		</p>

		<h2>How can I support this project?</h2>
		<p>
			The main way you can support this project is by contributing code to the GitHub repository or
			opening new issues on the <a href="https://github.com/Qainguin/amperage">GitHub</a> repository.
		</p>

		<h2>Special Thanks</h2>
		<ul class="ml-12 list-disc">
			<li>
				<div class="flex flex-row">
					<a href="https://github.com/lemlib/v5-serial-protocol">v5-serial-protocol</a>

					&nbsp;- This project saved me years.
				</div>
			</li>
			<li>
				<a href="https://www.npmjs.com/package/prism-code-editor">prism-code-editor</a>
			</li>
			<li>
				<a href="https://www.npmjs.com/package/@sveltejs/kit">@sveltejs/kit</a>
			</li>
			<li>
				<a href="https://www.npmjs.com/package/@isomorphic-git/lightning-fs"
					>@isomorphic-git/lightning-fs</a
				>
			</li>
			<li>
				<a href="https://www.npmjs.com/package/@lucide/svelte">@lucide/svelte</a>
			</li>
			<li><a href="https://www.npmjs.com/package/buffer">buffer</a></li>
			<li><a href="https://www.npmjs.com/package/littlezipper">littlezipper</a></li>
			<li>
				<a href="https://www.npmjs.com/package/isomorphic-git">isomorphic-git</a>
			</li>
			<li><a href="https://www.npmjs.com/package/nanoid">nanoid</a></li>
			<li><a href="https://www.npmjs.com/package/paneforge">paneforge</a></li>
		</ul>
	</div>
</main>

<style>
	/* Headings */
	h1 {
		font-size: 2.5em;
		color: var(--color-editor-foreground);
		margin-bottom: 0.5em;
	}

	h2 {
		font-size: 1.8em;
		color: var(--color-editor-foreground);
		margin-top: 1.5em;
	}

	/* Paragraphs */
	p {
		margin-bottom: 1em;
	}

	/* Links */
	a {
		color: var(--color-sky-300);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	/* Blog Post Container */
	.blog-post {
		max-width: 640px;
		margin: 0 auto;
		color: var(--color-editor-foreground);
		font-family: var(--font-mono);
	}

	hr {
		border-top: 1px solid var(--color-editor-whitespace-foreground);
	}
</style>
