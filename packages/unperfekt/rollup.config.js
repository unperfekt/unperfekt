/* eslint-disable import/no-default-export, import/default, import/namespace, import/no-named-as-default, import/no-named-as-default-member */
import path from "path"

import { sveld } from "sveld"
import svelte from "rollup-plugin-svelte"
import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"

// import sveld from "sveld"
import svelteConfig from "./svelte.config.js"
import pkg from "./package.json"

const { name, dependencies } = pkg

const external = Object.keys(dependencies).concat([
  "svelte/internal",
  "svelte/store",
  "svelte/transition",
  "svelte/easing",
  "@floating-ui/dom",
  "classnames",
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
      { file: pkg.main, format: "umd", name },
    ],
    external,
    plugins: [
      svelte({
        ...svelteConfig,
        emitCss: false,
      }),
      typescript(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      file: "./dist/unpkg/custom-elements.js",
      format: "iife",
      // globals: {
      //   "classnames": "cn",
      //   "svelte": "svelte",
      //   "svelte/internal": "svelte",
      //   "svelte/store": "svelte",
      //   "svelte/transition": "svelte",
      //   "svelte/easing": "svelte",
      //   "@floating-ui/dom": "dom",
      // },
      name,
    },
    external,
    plugins: [
      svelte({
        ...svelteConfig,
        emitCss: false,
        compilerOptions: {
          ...svelteConfig.compilerOptions,
          customElement: true,
        },
        preprocess: [prependTagOption()].concat(svelteConfig.preprocess),
      }),
      resolve(),
      typescript({
        sourceMap: false,
      }),
      sveld({
        typesOptions: {
          outDir: "types",
        },
        glob: true,
        // markdown: true,
        // json: true,
      }),
      // minify(),
    ],
  },
]
