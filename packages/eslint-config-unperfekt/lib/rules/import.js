module.exports = {
  extends: ["plugin:import/recommended"],
  rules: {
    "import/no-default-export": "error",
    // "import/no-unresolved": "off",
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
