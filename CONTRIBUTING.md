# Technical Design

- `./packages`

  - `commitlint-config-unperfekt`
    - configuration for unperfekt projects
  - `eslint-config-unperfekt`
    - linting configuration for unperfekt projects
  - `unperfekt`
    - unperfekt design system components written in svelte, which need to be build before they can be published.

- `./apps`

  - `docs` - documentation for `unperfekt` design system
    - api, props, slots, events and usage info about components
  - `???` - real app using the unperfekt design system
    - (there is no app yet)

- `package.json`

  - Root package.json manages building, versioning, bootstrapping and publishing of each workspace package within this monorepo. It is using `lerna` as well as `turbo` to manage this. `lerna` is used for versioning, bootstrapping and publishing, `turbo` for building.

- `.github/workflows/release.yml`

  - This workflow manages npm and github releases via `auto`, by building, testing, linting and publishing via `auto shipit`. This handles the release by generating a changelog, a github release with notes and publishing to npm.

- `lerna.json`
  - workspace packages are versioned `independet`, which means that packages are versioned indepdendently of each other.

<br/>

# Development Workflow

Example workflow of creating, adding and commit a new feature to a package:

Martin got the task to add a new feature to the `packages/unperfekt` package. The task is simple, create a new file called `packages/unperfekt/src/utils.ts` with one function called `const noOp = () => {}` and `export` it, so everyone using the `unperfekt` package in the future can `import` this function to use it.

* Martin goes ahead and creates a new branch from the `main` branch via `git checkout -b feat/mb/PROJ-213-add-utils`
* create a conventional commit, e.g. `✨ feat: add name component`
* push to the right branch (`main`, `beta`, `next`, `N.x.x` or `N.x`)
* release workflow will be triggered, which means building, testing and publishing

<br/>

# Release Branches

| branch | pre-release | description |
| --- | --- | --- |
| main | `false` | main branch for production releases |
| next | `"rc"` | pre-release branch for release candidates |
| beta | `true` | beta releases |
| x.x | `false` | hotfix releases (e.g. when already at v2, but a fix for v1 is required, one can create a hotfix branch with the version) |

Pushing to either of these branches will trigger a release (CI/CD) to happen, which means the following:

1. stuff gets linted via `pnpm run lint` in root `package.json`
2. stuff gets tested via `pnpm run test` in root `package.json`
3. stuff gets build via `pnpm run build` in root `package.json`
4. stuff gets versioned via `pnpm run version` in root `package.json`
    * this effectivly generates a changelog in each affected package that has since been touched/edited by either a commit or by depending on one of the other workspace packages.

5. stuff gets commited with a `[skip ci]` label to not end up within an infinite release loop cycle along with the new version number(s) of affected package(s).
6. stuff gets published to npm
7. stuff gets published to github
