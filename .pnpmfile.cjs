function readPackage(pkg) {
  if (pkg.name === "ts-node" || pkg.name === "cosmiconfig-typescript-loader") {
    pkg.dependencies["@types/node"] = "*"
    pkg.peerDependenciesMeta = {
      ...pkg.peerDependenciesMeta,
      "@types/node": { optional: true },
    }
  }
  if (pkg.name === "@auto-it/core") {
    pkg.dependencies["@octokit/core"] = "^3.5.0"
    pkg.dependencies["typescript"] = "^4.5.5"
    pkg.peerDependencies["typescript"] = "^4.5.5"
  }
  if (pkg.name === "@storybook/addon-svelte-csf") {
    pkg.dependencies = {
      "@storybook/addons": "^6",
      "@storybook/api": "^6",
      "@storybook/client-api": "^6",
      "@storybook/client-logger": "^6",
      "@storybook/components": "^6",
      "@storybook/core-events": "^6",
      "@storybook/theming": "^6",
    }
  }
  if (pkg.name === "@storybook/addon-docs") {
    pkg.dependencies["acorn"] = "^8"
  }
  if (
    [
      "@storybook/addon-essentials",
      "@storybook/addon-postcss",
      "@storybook/svelte",
      "babel-loader",
    ].includes(pkg.name)
  ) {
    pkg.dependencies["webpack"] = "^4"
  }
  if (
    [
      "@storybook/addon-actions",
      "@storybook/addon-backgrounds",
      "@storybook/addon-controls",
      "@storybook/addon-docs",
      "@storybook/addon-essentials",
      "@storybook/addon-links",
      "@storybook/addon-measure",
      "@storybook/addon-outline",
      "@storybook/addon-svelte-csf",
      "@storybook/addon-toolbars",
      "@storybook/addon-viewport",
      "@storybook/addons",
      "@storybook/client-api",
      "@storybook/components",
      "@storybook/core-common",
      "@storybook/core",
      "@storybook/preview-web",
      "@storybook/router",
      "@storybook/source-loader",
      "@storybook/store",
      "@storybook/theming",
      "@storybook/ui",
    ].includes(pkg.name)
  ) {
    pkg.dependencies = {
      ...pkg.dependencies,
      "react": "^17.0.0",
      "react-dom": "^17.0.0",
    }
    delete pkg.peerDependencies["react"]
    delete pkg.peerDependencies["react-dom"]
    pkg.peerDependenciesMeta = {
      ...pkg.peerDependenciesMeta,
      "react": { optional: true },
      "react-dom": { optional: true },
    }
  }
  return pkg
}

module.exports = {
  hooks: {
    readPackage,
  },
}
