/** @type {import('prettier').Options} */
export default {
  $schema: "http://json.schemastore.org/prettierrc",
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "css",
  printWidth: 80,
  proseWrap: "never",
  quoteProps: "consistent",
  semi: false,
  tabWidth: 2,
  trailingComma: "all",
  plugins: [
    "prettier-plugin-svelte",
    "prettier-plugin-tailwindcss",
  ],
  pluginSearchDirs: false,
  svelteAllowShorthand: false,
  svelteIndentScriptAndStyle: true,
  svelteSortOrder: "options-scripts-markup-styles",
  svelteStrictMode: false,
  overrides: [
    {
      files: "*.svelte",
      options: { parser: "svelte" },
    },
  ],
}
