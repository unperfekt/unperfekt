import importPlugin from "eslint-plugin-import"

export default {
  ...jsdoc.configs["flat/recommended"],
  rules: {
    "import/no-default-export": "error",
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        "alphabetize": {
          order: "desc",
          caseInsensitive: true,
        },
      },
    ],
  },
}
