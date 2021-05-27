module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
