module.exports = {
	env: {
		node: true,
		es2022: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	root: true,
	plugins: ['@typescript-eslint'],
	globals: { defineOptions: 'writable' },
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		project: true,
		tsconfigRootDir: __dirname,
		ecmaVersion: 'latest',
		extraFileExtensions: ['.vue'],
	},
	rules: {
		'vue/no-reserved-component-names': 'off',
		"@typescript-eslint/no-unnecessary-type-assertion": "off",
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		"@typescript-eslint/no-floating-promises": "off",
		'no-mixed-spaces-and-tabs': 'off',
		"@typescript-eslint/no-unsafe-call": 'off',
		"@typescript-eslint/restrict-plus-operands": 'off',
		"semi": "off",
    "@typescript-eslint/semi": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
		"@typescript-eslint/no-this-alias": "off",
		"vue/multi-word-component-names": "off"
		// '@typescript-eslint/no-floating-promises': 'off'
	}
}
