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
    pkg.dependencies.typescript = "^4.5.5"
    pkg.peerDependencies.typescript = "^4.5.5"
  }
  return pkg
}

module.exports = {
  hooks: {
    readPackage,
  },
}
