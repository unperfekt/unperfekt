/* eslint-disable import/no-default-export */

import path from "node:path"

import tseslint from "typescript-eslint"
import globals from "globals"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import sveltePlugin from "eslint-plugin-svelte"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import reactPlugin from "eslint-plugin-react"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import jsdocPlugin from "eslint-plugin-jsdoc"
import importPlugin from "eslint-plugin-import"
import prettierConfig from "eslint-config-prettier/flat"
import { defineConfig } from "eslint/config"
import nextPlugin from "@next/eslint-plugin-next"
import js from "@eslint/js"
import { includeIgnoreFile } from "@eslint/compat"

import { merge, mergeAll } from "./merge.js"

/**
 * Include the root .gitignore file if it exists.
 * @param {string} fromDirectory - The directory to start looking for .gitignore from.
 * @returns {object} The ESLint ignore configuration.
 */
function globalIgnore(fromDirectory = process.cwd()) {
  // Add the root .gitignore if it exists
  const rootGitignore = path.resolve(fromDirectory, ".gitignore")

  return includeIgnoreFile(rootGitignore)
}

const CJS = {
  name: "CJS Files",
  files: ["**/*.{.cts,cjs}"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "commonjs",
  },
}

const ESM = {
  name: "ESM Files",
  files: ["**/*.{js,mjs,jsx,ts,mts,tsx}"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
}
const GLOBALS = {
  name: "Global Variables",
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
}

export const allJSOverrides = {
  name: "js/unperfekt",
  rules: {
    // js-recommended
    "no-param-reassign": "error",
    "dot-notation": "error",
    // "prefer-const": "off",
    // import-recommended
    // XXX: https://typescript-eslint.io/troubleshooting/typed-linting/performance#eslint-plugin-import
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
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
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
  name: "ts/unperfekt",
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    // typescript-recommended
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
}

export const reactOverrides = {
  name: "react/unperfekt",
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // React-specific rules
    "react/prop-types": "off", // TypeScript handles prop validation
    "react/react-in-jsx-scope": "off", // React 17+ doesn't require import
    "react/jsx-uses-react": "off", // React 17+ doesn't require import
    // React Hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
}

export const allJSPlain = {
  name: "JavaScript",
  files: ["**/*.{js,mjs,cjs}"],
  plugins: {
    js,
  },
  extends: [
    "js/recommended",
    importPlugin.flatConfigs.recommended,
    jsdocPlugin.configs["flat/recommended"],
    eslintPluginUnicorn.configs.recommended,
    prettierConfig,
    allJSOverrides,
  ],
}

const reactConfig = {
  name: "react/recommended",
  ...merge(reactPlugin.configs.flat.recommended, reactPlugin.configs.flat["jsx-runtime"]),
}

export const allJSReact = {
  name: "JavaScript React",
  files: ["**/*.jsx"],
  plugins: {
    "js": js,
    "react": reactPlugin,
    "react-hooks": reactHooksPlugin,
    "jsx-a11y": jsxA11yPlugin,
  },
  extends: [
    "js/recommended",
    importPlugin.flatConfigs.recommended,
    jsdocPlugin.configs["flat/recommended"],
    eslintPluginUnicorn.configs.recommended,
    reactConfig,
    jsxA11yPlugin.flatConfigs.recommended,
    prettierConfig,
    allJSOverrides,
    reactOverrides,
  ],
}

export const allTSPlain = {
  name: "TypeScript",
  files: ["**/*.{ts,mts,cts}"],
  plugins: {
    js,
  },
  extends: [
    "js/recommended",
    eslintPluginUnicorn.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked[2],
    mergeAll(importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript, {
      name: "import/recommended-typescript",
    }),
    merge(jsdocPlugin.configs["flat/recommended"], jsdocPlugin.configs["flat/recommended-typescript"]),
    prettierConfig,
    allJSOverrides,
    allTSOverrides,
  ],
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
}

export const allTSReact = {
  name: "TypeScript React",
  files: ["**/*.tsx"],
  plugins: {
    "js": js,
    "react": reactPlugin,
    "react-hooks": reactHooksPlugin,
    "jsx-a11y": jsxA11yPlugin,
  },
  extends: [
    "js/recommended",
    reactConfig,
    jsxA11yPlugin.flatConfigs.recommended,
    eslintPluginUnicorn.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked[2],
    mergeAll(importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript, {
      name: "import/recommended-typescript",
    }),
    merge(jsdocPlugin.configs["flat/recommended"], jsdocPlugin.configs["flat/recommended-typescript"]),
    prettierConfig,
    allJSOverrides,
    allTSOverrides,
    reactOverrides,
  ],
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
}

export const FRAMEWORK_SVELTE = (svelteConfig = {}) => ({
  ...allTSPlain,
  name: "Svelte",
  files: ["**/*.{svelte,svelte.ts,svelte.js}"],
  extends: [
    ...allTSPlain.extends,
    sveltePlugin.configs["flat/base"],
    sveltePlugin.configs["flat/recommended"][3],
    sveltePlugin.configs["flat/prettier"][3],
  ],
  languageOptions: {
    parserOptions: {
      projectService: true,
      extraFileExtensions: [".svelte"],
      parser: tseslint.parser,
      svelteConfig,
    },
  },
})

export const FRAMEWORK_NEXTJS = {
  files: ["**/*.{js,jsx,ts,tsx}"],
  extends: [nextPlugin.flatConfig.coreWebVitals],
}

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export const rawConfig = [
  // Include all gitignore files found in the directory tree
  globalIgnore(),
  defineConfig(allJSPlain),
  defineConfig(allJSReact),
  defineConfig(allTSPlain),
  defineConfig(allTSReact),
  defineConfig(FRAMEWORK_SVELTE()),
  CJS,
  ESM,
  GLOBALS,
]

export default tseslint.config(rawConfig)
