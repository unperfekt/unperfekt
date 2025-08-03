/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import path from "node:path"

import type { StorybookConfig } from "@storybook/svelte-vite"

const config = {
  stories: ["../../../packages/unperfekt/src/components/*/stories/*.stories.@(svelte)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-svelte-csf"],
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@storybook/addon-svelte-csf": path.relative(__dirname, "../node_modules/@storybook/addon-svelte-csf"),
        },
      },
    }
  },
} satisfies StorybookConfig

export default config
