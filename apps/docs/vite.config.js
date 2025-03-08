/* eslint-disable import/no-default-export */
import path from "node:path"

import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from 'vite';

const config = defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      // needed for mdsvex to find the package "unperfekt"
      unperfekt: path.resolve("../../packages/unperfekt"),
    },
  },
})

export default config
