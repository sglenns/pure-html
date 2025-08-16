import css from '@eslint/css'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist/**/*']),
  eslintConfigPrettier,
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    languageOptions: { tolerant: true },
    extends: ['css/recommended'],
    rules: {
      'css/no-invalid-at-rules': 'error',
      'css/use-baseline': ['warn', { available: 'widely' }],
      'css/no-invalid-properties': ['error', { allowUnknownVariables: true }],
      'css/no-empty-blocks': 'error',
    },
  },
])
