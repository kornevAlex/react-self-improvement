module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'i18next'
  ],
  'rules': {
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'space-before-function-paren': ['error', 'always'],
    'prefer-destructuring': ['error', {
      'array': true,
      'object': true
    }, {
      'enforceForRenamedProperties': false
    }],
    'space-before-blocks': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'i18next/no-literal-string': ['error', { markupOnly : true }],
    'linebreak-style': ['error', 'windows'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'indent': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2]
  }
};
