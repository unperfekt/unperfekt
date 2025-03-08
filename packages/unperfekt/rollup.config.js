/* eslint-disable import/no-default-export */

import path from "node:path"
import { readFileSync } from "node:fs"

import svelte from "rollup-plugin-svelte"
import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

import svelteConfig from "./svelte.config.js"

const fileUrl = new URL("./package.json", import.meta.url)
const pkg = JSON.parse(readFileSync(fileUrl))

const { name, dependencies } = pkg

const external = Object.keys(dependencies).concat([
  "svelte/store",
  "svelte/action",
  "svelte/animate",
  "svelte/motion",
  "svelte/transition",
  "svelte/easing",
  // Svelte 5
  "svelte/reactivity",
  "svelte/events",
  "svelte/server",
  "svelte/elements",
])

const globals = {
  "classnames": "cn",
  "svelte": "svelte",
  "svelte/store": "store",
  "svelte/motion": "motion",
  "svelte/transition": "transition",
  "svelte/animate": "animate",
  "svelte/easing": "easing",
  "svelte/action": "action",
  // Svelte 5
  "svelte/reactivity": "reactivity",
  "svelte/events": "events",
  "svelte/server": "server",
  "svelte/elements": "elements",
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
    const optionsTag = `<svelte:options customElement="${tagName}" />`

    return { code: optionsTag + "\n\n" + content }
  },
})

export default [
  // {
  //   input: "src/index.ts",
  //   output: [{ file: pkg.exports["."], format: "es", name, globals }],
  //   external,
  //   plugins: [
  //     svelte({
  //       ...svelteConfig,
  //       emitCss: false,
  //     }),
  //     typescript({ sourceMap: false }),
  //     resolve({ dedupe: external }),
  //     commonjs(),
  //   ],
  // },
  {
    input: "src/index.ts",
    output: {
      file: pkg.unpkg,
      format: "iife",
      name,
      globals,
    },
    // external,
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
