/** @type {import('prettier').Options} */
module.exports = {
  $schema: "http://json.schemastore.org/prettierrc",
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "css",
  printWidth: 120,
  proseWrap: "never",
  quoteProps: "consistent",
  semi: false,
  tabWidth: 2,
  trailingComma: "all",
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"].map(require.resolve),
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
