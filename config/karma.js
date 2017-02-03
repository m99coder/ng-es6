var path = require('path');
var webpackConfig = require('./webpack.common');

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [{pattern: 'spec.bundle.js', watched: false}],
		exclude: [],
		plugins: [
			require('karma-chrome-launcher'),
			require('karma-phantomjs-launcher'),
			require('karma-jasmine'),
			require('jasmine-core'),
			require('karma-spec-reporter'),
			require('karma-webpack'),
			require('karma-sourcemap-loader'),
			require('karma-coverage')
		],
		preprocessors: {'spec.bundle.js': ['webpack', 'sourcemap']},
		webpack: {
			module: {
				loaders: webpackConfig.module.loaders
			}
		},
		webpackServer: {
			noInfo: true
		},
		reporters: ['spec', 'coverage'],
		coverageReporter: {
			dir: '../coverage',
			reporters: [
				{type: 'html', subdir: 'html'},
				{type: 'cobertura', subdir: '.', file: 'coverage.xml'},
				{type: 'text'}
			]
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['PhantomJS'],
		singleRun: true
	});
};
