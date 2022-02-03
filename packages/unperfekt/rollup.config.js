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

const convertToKebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2") // get all lowercase letters that are near to uppercase ones
    .replace(/[\s_]+/g, "-") // replace all spaces and low dash
    .toLowerCase() // convert to lower case

const prependTagOption = (exceptions = []) => ({
  markup({ content, filename }) {
    const basename = path.basename(filename, ".svelte")
    const kebabName = convertToKebabCase(basename)
    const tagName = exceptions.includes(kebabName)
      ? "{null}"
      : `un-${kebabName}`
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
      format: "umd",
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
      //   markdown: false,
      //   json: false
      // }),
      // minify(),
    ],
  },
]
