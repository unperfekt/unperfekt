/* eslint-disable import/no-default-export */

import { fileURLToPath } from "node:url"

import tseslint from "typescript-eslint"
import globals from "globals"
import sveltePlugin from "eslint-plugin-svelte"
import jsdocPlugin from "eslint-plugin-jsdoc"
import importPlugin from "eslint-plugin-import"
import prettierConfig from "eslint-config-prettier"
import { globalIgnores } from "eslint/config"
import eslintReact from "@eslint-react/eslint-plugin"
import js from "@eslint/js"

export const gitignore = globalIgnores([
  fileURLToPath(new URL("gitignore", import.meta.url)),
])

export const allJSOverrides = {
  rules: {
    // js-recommended
    "no-param-reassign": "error",
    "dot-notation": "error",
    // "prefer-const": "off",
    // import-recommended
    // XXX: https://typescript-eslint.io/troubleshooting/typed-linting/performance#eslint-plugin-import
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-unresolved": "off",
    // turn these on for CI
    "import/no-named-as-default": "off",
    "import/no-cycle": "off",
    "import/no-unused-modules": "off",
    // "import/no-deprecated": "off",
    "import/no-default-export": "warn",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        "alphabetize": {
          order: "desc",
          caseInsensitive: true,
        },
      },
    ],
  },
}

export const allTSOverrides = {
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    // typescript-recommended
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
}

export const allJS = {
  files: ["**/*.{js,jsx,mjs,cjs}"],
  extends: [
    js.configs.recommended,
    eslintReact.configs.recommended,
    importPlugin.flatConfigs.recommended,
    jsdocPlugin.configs["flat/recommended"],
    allJSOverrides,
    prettierConfig,
  ],
}

export const allTS = {
  files: ["**/*.{ts,tsx,mts,cts}"],
  extends: [
    js.configs.recommended,
    // eslintReact.configs['recommended-typescript'],
    eslintReact.configs["recommended-type-checked"],
    tseslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    // tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    jsdocPlugin.configs["flat/recommended"],
    jsdocPlugin.configs["flat/recommended-typescript"],
    allJSOverrides,
    allTSOverrides,
    prettierConfig,
  ],
  languageOptions: {
    parserOptions: {
      projectService: true,
      // tsconfigRootDir: import.meta.dirname,
    },
  },
}

export const allSvelte = {
  files: ["**/*.{svelte,svelte.ts,svelte.js}"],
  extends: [
    ...allTS.extends,
    ...sveltePlugin.configs.recommended,
    ...sveltePlugin.configs.prettier,
  ],
  languageOptions: {
    parserOptions: {
      projectService: true,
      extraFileExtensions: [".svelte"],
      parser: tseslint.parser,
      // svelteConfig,
    },
  },
}

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export const rawConfig = [
  gitignore,
  allJS,
  allTS,
  allSvelte,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
]

export default tseslint.config(rawConfig)
