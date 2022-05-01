module.exports = {
  $schema: "http://json.schemastore.org/eslintrc",
  root: true,
  extends: ["unperfekt"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
  },
}
