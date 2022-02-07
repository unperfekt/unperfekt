const path = require("path")
// const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  stories: [
    // "../src/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx|svelte)",
    // "../../../packages/unperfekt/src/**/*.stories.svelte",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/svelte",
  svelteOptions: {
    preprocess: require("svelte-preprocess")(),
  },
  // async viteFinal(config) {
  //   config.preprocess = require("svelte-preprocess")()
  //   return config
  // },
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: [/\.stories\.js$/, /index\.js$/],
  //     use: [require.resolve("@storybook/source-loader")],
  //     include: [path.resolve(__dirname, "../src")],
  //     enforce: "pre",
  //   })
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     $lib: path.resolve(__dirname, "../src/lib"),
  //     $components: path.resolve(__dirname, "../src/lib/components"),
  //   }
  //   const svelteLoader = config.module.rules.find(
  //     (r) => r.loader && r.loader.includes("svelte-loader"),
  //   )
  //   return config
  // },
  // core: {
  //   builder: "storybook-builder-vite",
  // },
}
