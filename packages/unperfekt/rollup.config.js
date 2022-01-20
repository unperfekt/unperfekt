import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import path from "path"
import svelte from "rollup-plugin-svelte"
// import sveld from "sveld"
// import sveld from "sveld"
import pkg from "./package.json"
import svelteConfig from "./svelte.config.js"

const { name, dependencies } = pkg

const external = Object.keys(dependencies).concat([
  "svelte/internal",
  "svelte/store",
])

const convertToKebabCase = (string) => string.replace(/\s+/g, "-").toLowerCase()

const prependTagOption = (exceptions = []) => ({
  markup({ content, filename }) {
    const basename = convertToKebabCase(path.basename(filename, ".svelte"))
    const tagName = exceptions.includes(basename) ? "{null}" : `un-${basename}`
    const optionsTag = `<svelte:options tag="${tagName}" />`

    return { code: optionsTag + "\n\n" + content }
  },
})

export default [
  {
    input: "src/index.ts",
    output: [
      { file: pkg.module, format: "es", name },
      { file: pkg.main, format: "cjs", name },
    ],
    external,
    plugins: [svelte(svelteConfig), typescript()],
  },
  {
    input: "src/index.ts",
    output: {
      file: "./dist/unpkg/custom-elements.js",
      format: "iife",
      name,
    },
    external,
    plugins: [
      svelte({
        ...svelteConfig,
        compilerOptions: {
          customElement: true,
        },
        preprocess: [prependTagOption()].concat(svelteConfig.preprocess),
      }),
      resolve(),
      typescript({
        sourceMap: false,
      }),
      // sveld({
      //   glob: true,
      //   markdown: true,
      //   json: true
      // }),
      // minify(),
    ],
  },
]
