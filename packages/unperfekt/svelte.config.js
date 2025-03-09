import { sveltePreprocess } from "svelte-preprocess"

/**
 * @type {import("@sveltejs/kit").Config}
 */
const config = {
  preprocess: sveltePreprocess(),
  compilerOptions: {
    immutable: true,
    // runes: true,
  },
}

export default config
