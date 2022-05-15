/* eslint-disable import/no-default-export, import/default, import/namespace, import/no-named-as-default, import/no-named-as-default-member */

import path from "path"

// import { sveld } from "sveld"
import svelte from "rollup-plugin-svelte"
import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

import svelteConfig from "./svelte.config.js"
import pkg from "./package.json"

const { name, dependencies } = pkg

const external = Object.keys(dependencies).concat([
  "svelte/internal",
  "svelte/store",
  "svelte/transition",
  "svelte/easing",
])

const globals = {
  "classnames": "cn",
  "svelte": "svelte",
  "svelte/internal": "internal",
  "svelte/store": "store",
  "svelte/transition": "transition",
  "svelte/easing": "easing",
  "@floating-ui/dom": "dom",
}

/** @param {string} str String to kebab-case. */
const convertToKebabCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // get all lowercase letters that are near to uppercase ones
    .replace(/[\s_]+/g, "-") // replace all spaces and low dash
    .toLowerCase() // convert to lower case

/** @param {string[]} exceptions Strings to exclude. */
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
      { file: pkg.module, format: "es", name, globals },
      { file: pkg.main, format: "umd", name, globals },
    ],
    external,
    plugins: [
      svelte({
        ...svelteConfig,
        emitCss: false,
      }),
      typescript({ sourceMap: false }),
      resolve({ dedupe: external }),
      commonjs(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      file: pkg.unpkg,
      format: "iife",
      name,
      globals,
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
      typescript({
        sourceMap: false,
      }),
      resolve({ browser: true, dedupe: external }),
      commonjs(),
      // sveld({
      //   typesOptions: {
      //     outDir: "types",
      //   },
      //   glob: true,
      //   // markdown: true,
      //   // json: true,
      // }),
      // minify(),
    ],
  },
]
