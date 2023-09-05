module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{json,css,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};