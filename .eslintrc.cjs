module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended', 
		'plugin:@typescript-eslint/recommended', 
		'plugin:import/typescript',
    	'plugin:import/recommended',
  ],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: [
			"./tsconfig.json"
		]
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		"semi": "error",
		  "indent": [
			  "warn",
			  2
		  ],
		  "no-multiple-empty-lines": "error",
		  "@typescript-eslint/no-floating-promises": "error",
		  "import/order": [
			  "error",
			  {
				  "groups": [
					  "external",
					  "builtin",
					  "internal",
					  "sibling",
					  "parent",
					  "index"
				  ],
				  "newlines-between": "always"
			  }
		  ],
		  "quotes": [
			  "error",
			  "single"
		  ],
		  "object-curly-spacing": [
			  "error",
			  "always"
		  ],
		  "no-mixed-spaces-and-tabs": "error"
	  }
};
