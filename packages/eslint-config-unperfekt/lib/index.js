module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/jsdoc",
    "./rules/import",
    "./rules/svelte",
    "./rules/typescript",
    "./rules/prettier",
  ].map(require.resolve),
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
}
