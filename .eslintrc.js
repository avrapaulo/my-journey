module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
}
