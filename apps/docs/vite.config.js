import path from "node:path"

import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import { sveltekit } from "@sveltejs/kit/vite"

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
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
