# eslint-config-unperfekt

ESLint configuration for the unperfekt monorepo.

## Installation

Install the package and its peer dependencies.

```bash
pnpm add -D eslint-config-unperfekt eslint typescript svelte prettier
```

## Usage

This package provides a modern, flat-config (`eslint.config.js`) setup for ESLint.

### Basic Usage

Create an `eslint.config.js` file in your project root and import the default configuration. This includes rules for JavaScript, TypeScript, and Svelte files.

```javascript
// eslint.config.js
import config from "eslint-config-unperfekt"

export default config
```

### Advanced Usage

If you need more granular control, you can import specific configurations and compose them yourself.

```javascript
// eslint.config.js
import { allJS, allSvelte, allTS, gitignore } from "eslint-config-unperfekt"
import tseslint from "typescript-eslint"

export default tseslint.config(
  gitignore,
  allJS,
  allTS,
  allSvelte,
  // ... your custom configurations
)
```

### Available Configurations

- `default`: The main export, a ready-to-use configuration array for JS, TS, and Svelte.
- `rawConfig`: The raw array of config objects, before being passed to `tseslint.config()`.
- `allJS`: Configuration for JavaScript files (`.js`, `.jsx`, `.mjs`, `.cjs`).
- `allTS`: Configuration for TypeScript files (`.ts`, `.tsx`, `.mts`, `.cts`).
- `allSvelte`: Configuration for Svelte files (`.svelte`).
- `gitignore`: Ignores files listed in the root `.gitignore` file.

### For TypeScript Projects

You will need a `tsconfig.json` in your project root for type-aware linting rules to work correctly.

## Included Plugins

This configuration bundles several key ESLint plugins:

- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/): For TypeScript support.
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import): To lint ES6+ import/export syntax.
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc): For JSDoc comment linting.
- [eslint-plugin-svelte](https://github.com/sveltejs/eslint-plugin-svelte): For Svelte component linting.
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): To disable ESLint rules that conflict with Prettier.
