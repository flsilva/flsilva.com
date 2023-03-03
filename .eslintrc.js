module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'] },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    // This conflicts with Prettier.
    'object-curly-newline': ['off'],
    // TypeScript tooling works bettern with named exports.
    'import/prefer-default-export': [
      'off',
      { 'target': 'any' }
    ],
    // Necessary if we want to TypeScript type our function declarations?
    "react/function-component-definition": ['error', {
      namedComponents: 'arrow-function',
    }],
    // I don't think it makes sense to use this rule when using TypeScript.
    // Your ...props is typed so it's safe to pass it around when it makes sense.
    "react/jsx-props-no-spreading": ['off'],
    // This conflicts with Prettier.
    "react/jsx-one-expression-per-line": ['off'],
    // I don't think it makes sense to use this rule when using TypeScript.
    "react/require-default-props": ['off'],
  },
};