import tseslint from "typescript-eslint"
import { rawConfig } from "eslint-config-unperfekt"

import svelteConfig from "./svelte.config.js"

export default tseslint.config(
  rawConfig.concat([
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
    {
      files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
      languageOptions: {
        // ecmaVersion: "latest",
        // sourceType: "module",
        parserOptions: {
          // projectService: true,
          extraFileExtensions: [".svelte"],
          parser: tseslint.parser,
          svelteConfig,
        },
      },
    },
  ]),
)
