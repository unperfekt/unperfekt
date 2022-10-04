module.exports = {
  extends: ["unperfekt"],
  globals: {
    google: "readonly",
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
  },
}
