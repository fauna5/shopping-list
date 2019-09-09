module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['import', 'jest', 'prettier'],
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    node: true,
    'jest/globals': true
  },
  rules: {
    'no-console': ['error'],
    'prettier/prettier': 'error'
  }
};
