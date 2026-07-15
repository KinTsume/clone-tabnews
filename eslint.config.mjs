import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import pluginJest from "eslint-plugin-jest";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // update this to match your test files
    files: ["**/*.spec.js", "**/*.test.js"],
    ...pluginJest.configs["flat/recommended"],
  },
  eslintConfigPrettier,
]);

export default eslintConfig;
