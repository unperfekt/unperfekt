module.exports = {
  plugins: ["svelte3"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  settings: {
    "svelte3/typescript": () => require("typescript"),
  },
  // parserOptions: {
  //   tsconfigRootDir: __dirname,
  //   project: ["./tsconfig.json"],
  //   extraFileExtensions: [".svelte"],
  // },
}
