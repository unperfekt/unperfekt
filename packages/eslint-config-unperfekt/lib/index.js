module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/jsdoc",
    "./rules/import",
    "./rules/typescript",
    "./rules/svelte",
    "./rules/prettier",
  ].map(require.resolve),
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
}
