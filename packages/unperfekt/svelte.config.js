/* eslint-disable import/no-default-export, jsdoc/valid-types */
import preprocess from "svelte-preprocess"

/**
 * @type {import("@sveltejs/kit").Config}
 */
const config = {
  preprocess: preprocess(),
  compilerOptions: {
    immutable: true,
  },
}

export default config
