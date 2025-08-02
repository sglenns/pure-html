import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  eslintConfigPrettier,
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    languageOptions: { tolerant: true },
    extends: ['css/recommended'],
    rules: {
      'css/no-invalid-at-rules': 'warn',
      'css/use-baseline': 'warn',
      'css/no-invalid-properties': 'warn',
      'css/no-empty-blocks': 'warn',
    },
  },
])
