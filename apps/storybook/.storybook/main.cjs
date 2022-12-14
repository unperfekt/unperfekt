module.exports = {
  stories: [
    // "../src/**/*.stories.mdx",
    // "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
    // "../stories/*.stories.@(js|jsx|ts|tsx|svelte)",
    "../node_modules/unperfekt/src/components/*/stories/*.stories.svelte",
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
  // features: {
  //   storyStoreV7: true,
  // },
  // core: {
  //   builder: {
  //     name: "webpack5",
  //     options: {
  //       lazyCompilation: true,
  //       fsCache: true,
  //     },
  //   },
  // },
  // core: {
  //   builder: "@storybook/builder-vite",
  // },
}
