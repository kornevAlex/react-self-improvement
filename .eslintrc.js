module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
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
		'react/display-name': 'off'
	}
};
