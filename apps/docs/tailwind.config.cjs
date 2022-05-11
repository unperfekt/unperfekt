module.exports = {
  content: [
    // "./node_modules/unperfekt/src/**/*.css",
    // "./node_modules/@unperfekt/*/src/**/*.{ts,svelte}",
    "./node_modules/unperfekt/src/**/*.{ts,svelte}",
    "./src/**/*.{html,js,svelte,ts}",
  ],
  presets: [require("tailwind-config-unperfekt")],
}
