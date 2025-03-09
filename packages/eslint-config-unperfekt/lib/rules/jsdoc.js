import jsdoc from "eslint-plugin-jsdoc"

export default {
  ...jsdoc.configs["flat/recommended"],
  rules: {
    "jsdoc/require-description-complete-sentence": "error",
    "jsdoc/require-param": "off",
    "jsdoc/require-returns": "off",
    "jsdoc/sort-tags": "error",
    "jsdoc/check-line-alignment": ["error", "never"],
  },
}
