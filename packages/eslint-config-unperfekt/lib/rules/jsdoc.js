module.exports = {
  extends: ["plugin:jsdoc/recommended"],
  rules: {
    "jsdoc/require-description-complete-sentence": "error",
    "jsdoc/require-param": "off",
    "jsdoc/require-returns": "off",
    "jsdoc/sort-tags": "error",
    "jsdoc/check-line-alignment": ["error", "never"],
  },
}
