import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['node_modules', 'dist', 'coverage', 'optimize-images.mjs']
  },
  js.configs.recommended,
  {
    files: ['**/*.vue'],
    plugins: { vue: pluginVue },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2022
      }
    },
    rules: {
      ...pluginVue.configs['flat/recommended'].rules,
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'warn',
      'vue/require-default-prop': 'off',
      'vue/require-prop-types': 'off'
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { document: 'readonly', URL: 'readonly', fetch: 'readonly', FormData: 'readonly', setTimeout: 'readonly', clearTimeout: 'readonly' }
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn'
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: { document: 'readonly', URL: 'readonly', fetch: 'readonly', FormData: 'readonly', setTimeout: 'readonly', clearTimeout: 'readonly', window: 'readonly' }
    }
  }
]