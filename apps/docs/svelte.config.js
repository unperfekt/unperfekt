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
    adapter: adapter({}),
    prerender: {
      default: true,
    },
    vite: {
      // build: {
      //   rollupOptions: {
      //     external: ["@floating-ui/dom"],
      //   },
      // },
      server: {
        fs: {
          // allow access to files in the node_modules folder, required to
          // get the docs from "unperfekt"
          allow: ["."],
        },
      },
    },
  },
}

export default config
