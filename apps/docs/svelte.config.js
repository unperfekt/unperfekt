/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/default */
/* eslint-disable import/namespace */
/* eslint-disable import/no-default-export */

import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"
import adapter from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".svx"],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), mdsvex()],
  compilerOptions: {
    immutable: true,
  },
  kit: {
    adapter: adapter(),
  },
}

export default config
