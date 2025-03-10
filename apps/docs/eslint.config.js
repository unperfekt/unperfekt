import tseslint from "typescript-eslint"
import { rawConfig } from "eslint-config-unperfekt"

import svelteConfig from "./svelte.config.js"

export default tseslint.config(
  rawConfig.concat([
    {
      files: ["**/*.{svelte,svelte.ts,svelte.js}"],
      languageOptions: {
        parserOptions: {
          svelteConfig,
        },
      },
    },
  ]),
)
