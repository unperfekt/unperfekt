import config from "eslint-config-unperfekt"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    extends: [config]
  },
])
