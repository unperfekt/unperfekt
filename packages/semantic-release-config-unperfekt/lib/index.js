module.exports = {
  tagFormat: "${version}",
  // https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#branches
  // https://github.com/semantic-release/semantic-release/blob/master/docs/usage/workflow-configuration.md#workflow-configuration
  branches: [
    // regular releases to the default distribution channel from the branch main
    "main",
    // regular releases to a distribution channel matching the branch name from any existing branch with a name matching a maintenance release range (N.N.x or N.x.x or N.x with N being a number)
    '+([0-9])?(.{+([0-9]),x}).x',
    // prereleases to the next distribution channel from the branch next if it exists
    { name: "next", channel: "next", prerelease: "rc" },
    // prereleases to the beta distribution channel from the branch beta if it exists
    { name: "beta", prerelease: true },
  ],
  // plugins: [
  //   [
  //     "@semantic-release/commit-analyzer",
  //     {
  //       config: "conventional-changelog-gitmoji-config",
  //       releaseRules: [{ type: "build", release: "patch" }],
  //     },
  //   ],
  //   [
  //     "@semantic-release/release-notes-generator",
  //     {
  //       config: "conventional-changelog-gitmoji-config",
  //     },
  //   ],
  //   [
  //     "@semantic-release/changelog",
  //     {
  //       changelogFile: "CHANGELOG.md",
  //       changelogTitle: "# Changelog",
  //     },
  //   ],
  //   // "@semantic-release/npm",
  //   "@semantic-release/github",
  //   [
  //     "@semantic-release/git",
  //     {
  //       assets: ["CHANGELOG.md", "package.json"],
  //       message:
  //         // eslint-disable-next-line no-template-curly-in-string
  //         "🔖 chore(release): ${nextRelease.gitTag} [skip ci] \n\n${nextRelease.notes}",
  //     },
  //   ],
  // ],
  // extends: ["semantic-release-config-gitmoji"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    // "@semantic-release/npm",
    "@semantic-release/changelog",
    "@semantic-release/git",
  ],
}
