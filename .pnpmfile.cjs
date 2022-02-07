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
    pkg.peerDependencies = {}
  }
  if (pkg.name === "@storybook/addon-docs") {
    // console.log("pkg", pkg)
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
    // console.log("pkg", pkg)
    pkg.dependencies = {
      ...pkg.dependencies,
      "react": "*",
      "react-dom": "*",
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
