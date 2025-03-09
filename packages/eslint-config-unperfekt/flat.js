import { fileURLToPath } from "node:url"

import tseslint from "typescript-eslint"
import globals from "globals"
import sveltePlugin from "eslint-plugin-svelte"
import jsdocPlugin from "eslint-plugin-jsdoc"
import importPlugin from "eslint-plugin-import"
import prettierConfig from "eslint-config-prettier"
import js from "@eslint/js"
import { includeIgnoreFile } from "@eslint/compat"

// import svelteConfig from "./svelte.config.js"

// const typeScriptExtensions = ['.ts', '.cts', '.mts', '.tsx'];

// const allExtensions = [...typeScriptExtensions, '.js', '.jsx', '.mjs', '.cjs'];

export const gitignore = includeIgnoreFile(
  fileURLToPath(new URL("../../.gitignore", import.meta.url)),
)

export const allJSOverrides = {
  rules: {
    // js-recommended
    "no-param-reassign": "error",
    "dot-notation": "error",
    // import-recommended
    // XXX: https://typescript-eslint.io/troubleshooting/typed-linting/performance#eslint-plugin-import
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-unresolved": "off",
    // only for CI
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
    // typescript-recommended
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
}

export const allJS = {
  files: ["**/*.{js,jsx,mjs,cjs}"],
  extends: [
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    jsdocPlugin.configs["flat/recommended"],
    allJSOverrides,
    prettierConfig,
  ],
}

export const allTS = {
  files: ["**/*.{ts,cts,mts,tsx}"],
  extends: [
    tseslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    jsdocPlugin.configs["flat/recommended-typescript"],
    allJSOverrides,
    allTSOverrides,
    prettierConfig,
  ],
}

/** @type {import('eslint').Linter.Config[]} */
export const rawConfig = [
  gitignore,
  allJS,
  ...sveltePlugin.configs.recommended,
  ...sveltePlugin.configs.prettier,
  allTS,
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
