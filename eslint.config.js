import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: [
      'node_modules',
      'dist',
      'coverage',
      'optimize-images.mjs',
      '**/*.ts',
      '**/*.tsx',
      'src/vite-env.d.ts'
    ]
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
    files: ['**/*.js', '**/*.mjs'],
    ignores: ['e2e/**', 'playwright.config.js', 'public/sw.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { document: 'readonly', URL: 'readonly', fetch: 'readonly', FormData: 'readonly', setTimeout: 'readonly', clearTimeout: 'readonly', console: 'readonly' }
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn'
    }
  },
  {
    files: ['e2e/**', 'playwright.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        URL: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        console: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        location: 'readonly'
      }
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn'
    }
  },
  {
    files: ['public/sw.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { self: 'readonly', caches: 'readonly', fetch: 'readonly', skipWaiting: 'readonly', clients: 'readonly' }
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn'
    }
  },
  {
    files: ['src/composables/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        URL: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        console: 'readonly',
        window: 'readonly',
        IntersectionObserver: 'readonly',
        ResizeObserver: 'readonly',
        Image: 'readonly'
      }
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn'
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: {
        document: 'readonly',
        URL: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        window: 'readonly',
        IntersectionObserver: 'readonly',
        ResizeObserver: 'readonly',
        console: 'readonly'
      }
    }
  }
]