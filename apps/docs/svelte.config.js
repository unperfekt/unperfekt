/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/default */
/* eslint-disable import/namespace */
/* eslint-disable import/no-default-export */
import { mdsvex } from "mdsvex"
import { vitePreprocess } from "@sveltejs/kit/vite"
import adapter from "@sveltejs/adapter-auto"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".svx"],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex()],
  compilerOptions: {
    immutable: true,
  },
  kit: {
    adapter: adapter(),
  },
}

export default config
