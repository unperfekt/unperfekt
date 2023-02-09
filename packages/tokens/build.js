const yaml = require("yaml")
const StyleDictionary = require("style-dictionary")

const themes = ["light", "dark"]

themes.map((theme) => {
  const config = {
    parsers: [
      {
        pattern: /\.yaml$/,
        parse: ({ contents }) => yaml.parse(contents),
      },
    ],
    source: [
      `src/themes/${theme}.yaml`,
      "src/globals/**/*.yaml",
      `src/themes/${theme}-aliases.yaml`,
    ],
    platforms: {
      web: {
        transformGroup: "css",
        buildPath: "dist/css/",
        files: [
          {
            destination: `${theme}.css`,
            format: "css/variables",
            options: {
              outputReferences: true,
              selector: `.unperfekt--${theme}`,
            },
          },
        ],
      },
      node: {
        transformGroup: "js",
        files: [
          {
            format: "javascript/es6",
            destination: `dist/node/${theme}/index.js`,
          },
        ],
      },
    },
  }
  const dict = StyleDictionary.extend(config)

  dict.buildAllPlatforms()
})
