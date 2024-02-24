module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'linebreak-style': 0,
    indent: ["error", 2, { "SwitchCase": 1 }],
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'never'],
    'max-len': ['error', {code: 120}],
    'no-console': ['warn', {allow: ['warn', 'error']}],
    semi: ['error', 'always'],
  },
};
