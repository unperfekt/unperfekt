function readPackage(pkg) {
  if (pkg.name === "@octokit/plugin-throttling") {
    delete pkg.peerDependencies["@octokit/core"]
    pkg.dependencies["@octokit/core"] = "^3.5.0"
  }
  if (pkg.name === "ts-node") {
    delete pkg.peerDependencies["typescript"]
    pkg.dependencies["typescript"] = "^4.6.4"
  }

  return pkg
}

module.exports = {
  hooks: {
    readPackage,
  },
}
