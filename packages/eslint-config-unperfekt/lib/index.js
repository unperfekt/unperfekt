module.exports = {
  extends: [
    "./rules/best-practices",
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
