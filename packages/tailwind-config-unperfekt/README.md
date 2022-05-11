# `eslint-config-unperfekt`

> ESLint config for unperfekt

## Usage

```js
module.exports = {
  extends: "unperfekt",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
  },
}
```
