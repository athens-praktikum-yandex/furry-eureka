module.exports = {
  extends: ['airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true
  },
  ignorePatterns: '*.js',
  rules: {
    'import/prefer-default-export': 0,
    '@typescript-eslint/ban-types': 1,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
  }
};