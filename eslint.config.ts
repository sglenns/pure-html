import css from "@eslint/css";
import js from "@eslint/js";
import markdown from "@eslint/markdown";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist/**/*", "node_modules/**/*"]),
  eslintConfigPrettier,
  tseslint.configs.recommended,
  {
    files: ["**/*.md"],
    plugins: { markdown },
    extends: ["markdown/recommended"],
    language: "markdown/gfm",
    rules: {
      "markdown/no-html": ["error"],
    },
  },

  {
    ...html.configs?.["flat/recommended"],
    files: ["**/*.html"],
    plugins: { "@html-eslint": html },
    languageOptions: {
      parser: htmlParser,
      parserOptions: {
        templateEngineSyntax: {
          "{{": "}}",
        },
      },
    },
    rules: {
      "@html-eslint/use-baseline": ["warn", { available: "widely" }],
    },
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },

  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    languageOptions: { tolerant: true },
    extends: ["css/recommended"],
    rules: {
      "css/no-invalid-at-rules": ["error"],
      "css/use-baseline": ["warn", { available: "widely" }],
      "css/no-invalid-properties": ["error", { allowUnknownVariables: true }],
      "css/no-empty-blocks": ["error"],
    },
  },
]);
