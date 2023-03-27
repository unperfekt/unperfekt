module.exports = {
  $schema: "http://json.schemastore.org/eslintrc",
  extends: ["unperfekt"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
    sourceType: "module",
  },
}
