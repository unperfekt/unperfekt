/**
 * @type {import('prettier').Options}
 */
module.exports = {
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
  // XXX: Svelte Prettier options are backed into prettier-plugin-tailwindcss,
  // see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
  // for the reason why we're not using the svelte plugin directly.
  // There's also an issue with pnpm+prettier-plugin-tailwindcss which forces us
  // to resolve the plugin and also add the override for svelte files.
  // See https://github.com/prettier/prettier/pull/9167
  // and https://github.com/sveltejs/prettier-plugin-svelte/issues/155
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  svelteAllowShorthand: true,
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
