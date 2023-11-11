module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		es2023: true,
	},

	parser: '@typescript-eslint/parser', // Парсер

	extends: [
		'xo',
		'plugin:react/recommended',
	], // Подключения

	plugins: [
		'react',
		'unused-imports',
		'@stylistic/ts',
	], // Плагины

	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: [
				'next/core-web-vitals',
				'plugin:@typescript-eslint/recommended',

			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
		'key-spacing': 'off',
		'arrow-body-style': 'off',
		'no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
		'no-trailing-spaces': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
	},

};
