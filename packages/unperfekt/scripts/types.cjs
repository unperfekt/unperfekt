const path = require("path")

const svelte2tsx = require("svelte2tsx")

const root = path.join(path.resolve(), "src")

svelte2tsx.emitDts({
  libRoot: root,
  svelteShimsPath: require.resolve("svelte2tsx/svelte-shims.d.ts"),
  declarationDir: "dist/types",
})
