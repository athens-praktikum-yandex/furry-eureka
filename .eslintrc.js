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
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],

    '@typescript-eslint/no-explicit-any': 2,

    '@typescript-eslint/ban-types': 1,

    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
  }
};
