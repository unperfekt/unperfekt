import yaml from "yaml"
import StyleDictionary from "style-dictionary"

const themes = ["light", "dark"]

await Promise.all(
  themes.map((theme) => {
    /** @type {import('style-dictionary').Config } */
    const config = {
      hooks: {
        parsers: {
          "yaml-parser": {
            pattern: /\.yaml$/,
            parser: ({ contents }) => yaml.parse(contents),
          },
        },
      },
      source: [
        `src/themes/${theme}.yaml`,
        "src/globals/**/*.yaml",
        `src/themes/${theme}-aliases.yaml`,
      ],
      parsers: ["yaml-parser"],
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

    const sd = new StyleDictionary(config)

    return sd.buildAllPlatforms()
  }),
)
