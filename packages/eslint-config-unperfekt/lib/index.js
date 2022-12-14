module.exports = {
  extends: [
    "./rules/best-practices.js",
    "./rules/jsdoc.js",
    "./rules/import.js",
    "./rules/svelte.js",
    "./rules/typescript.js",
    "./rules/prettier.js",
  ].map(require.resolve),
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
}
