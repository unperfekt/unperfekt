# commitlint-config-unperfekt

> [unperfekt](httpss://github.com/unperfekt/unperfekt) commitlint configuration.

This package provides a reusable [commitlint](https://commitlint.js.org/) configuration that enforces the [Conventional Commits](https://www.conventionalcommits.org/) specification.

## Installation

Install the package and its peer dependencies using your preferred package manager:

```bash
npm install commitlint-config-unperfekt commitlint --save-dev
```

```bash
pnpm add -D commitlint-config-unperfekt commitlint
```

```bash
yarn add -D commitlint-config-unperfekt commitlint
```

## Usage

To use this configuration, extend it in your `commitlint.config.js` or `.commitlintrc.json` file:

```json
{
  "extends": ["commitlint-config-unperfekt"]
}
```

This configuration extends `@commitlint/config-conventional`. For more details on the available rules, please refer to the [commitlint documentation](https://commitlint.js.org/reference/rules).

## Contributing

Contributions are welcome! Please see the [main project's CONTRIBUTING.md](https://github.com/unperfekt/unperfekt/blob/main/CONTRIBUTING.md) for more details.

## License

[ISC](./LICENSE)
