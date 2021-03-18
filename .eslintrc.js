module.exports = {
  extends: ['airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'eslint.tsconfig.json',
  },
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'prettier'
  ],
  rules: {
    'linebreak-style': 0,
    'no-trailing-spaces': 0,
    '@typescript-eslint/space-infix-ops': 0,
    '@typescript-eslint/object-curly-spacing': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 1,
    'class-methods-use-this': 0,
    'import/extensions': 1
  }
};