module.exports = {
  "$schema": "http://json.schemastore.org/prettierrc",
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
  // svelte
  svelteAllowShorthand: true,
  svelteIndentScriptAndStyle: true,
  svelteSortOrder: "options-scripts-markup-styles",
  svelteStrictMode: false,
  overrides: [
    {
      files: ["*.ts", "*.d.ts", "*.tsx", "*.svelte"],
      options: {
        parser: "typescript",
      },
    },
  ],
}
