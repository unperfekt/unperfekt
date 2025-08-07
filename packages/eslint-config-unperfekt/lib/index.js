/* eslint-disable import/no-default-export */

import path from "node:path"

import tseslint from "typescript-eslint"
import { tailwind4 } from "tailwind-csstree"
import globals from "globals"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import sveltePlugin from "eslint-plugin-svelte"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import reactPlugin from "eslint-plugin-react"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import jsdocPlugin from "eslint-plugin-jsdoc"
import importPlugin from "eslint-plugin-import"
import prettierConfig from "eslint-config-prettier"
import nextPlugin from "@next/eslint-plugin-next"
import js from "@eslint/js"
import css from "@eslint/css"
import { includeIgnoreFile } from "@eslint/compat"

/**
 * Include the root .gitignore file if it exists.
 * @param {string} fromDir - The directory to start looking for .gitignore from.
 * @param fromDirectory
 * @returns {object} The ESLint ignore configuration.
 */
function includeRootGitignore(fromDirectory = process.cwd()) {
  // Add the root .gitignore if it exists
  const rootGitignore = path.resolve(fromDirectory, ".gitignore")

  return includeIgnoreFile(rootGitignore)
}

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
  files: ["**/*.{js,mjs,cjs}"],
  extends: [
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    jsdocPlugin.configs["flat/recommended"],
    eslintPluginUnicorn.configs.recommended,
    allJSOverrides,
  ],
}

export const allJSReact = {
  files: ["**/*.jsx"],
  plugins: {
    "react": reactPlugin,
    "react-hooks": reactHooksPlugin,
    "jsx-a11y": jsxA11yPlugin,
  },
  extends: [
    js.configs.recommended,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat["jsx-runtime"],
    jsxA11yPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.recommended,
    jsdocPlugin.configs["flat/recommended"],
    nextPlugin.flatConfig.coreWebVitals,
    eslintPluginUnicorn.configs.recommended,
    allJSOverrides,
    reactOverrides,
  ],
}

export const allTSPlain = {
  files: ["**/*.{ts,mts,cts}"],
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    // tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    jsdocPlugin.configs["flat/recommended"],
    jsdocPlugin.configs["flat/recommended-typescript"],
    eslintPluginUnicorn.configs.recommended,
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
  files: ["**/*.tsx"],
  plugins: {
    "react": reactPlugin,
    "react-hooks": reactHooksPlugin,
  },
  extends: [
    js.configs.recommended,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat["jsx-runtime"],
    jsxA11yPlugin.flatConfigs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    // tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    jsdocPlugin.configs["flat/recommended"],
    jsdocPlugin.configs["flat/recommended-typescript"],
    nextPlugin.flatConfig.coreWebVitals,
    eslintPluginUnicorn.configs.recommended,
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

export const allSvelte = {
  files: ["**/*.{svelte,svelte.ts,svelte.js}"],
  extends: [...allTSPlain.extends, ...sveltePlugin.configs.recommended, ...sveltePlugin.configs.prettier],
  languageOptions: {
    parserOptions: {
      projectService: true,
      extraFileExtensions: [".svelte"],
      parser: tseslint.parser,
      // svelteConfig,
    },
  },
}

export const allNext = {
  files: ["**/*.{js,jsx,ts,tsx}"],
  extends: [nextPlugin.flatConfig.coreWebVitals],
}

export const allCSS = {
  files: ["**/*.css"],
  language: "css/css",
  languageOptions: {
    customSyntax: tailwind4,
  },
  plugins: {
    css,
  },
  extends: [css.configs.recommended],
}

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export const rawConfig = [
  // Include all gitignore files found in the directory tree
  includeRootGitignore(),
  allJSPlain,
  allJSReact,
  allTSPlain,
  allTSReact,
  allSvelte,
  allCSS,
  // allNext,
  prettierConfig,
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
