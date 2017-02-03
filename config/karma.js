module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [{pattern: 'spec.bundle.js', watched: false}],
		exclude: [],
		plugins: [
			require('karma-chrome-launcher'),
			require('karma-jasmine'),
			require('jasmine-core'),
			require('karma-spec-reporter'),
			require('karma-webpack')
		],
		preprocessors: {'spec.bundle.js': ['webpack']},
		webpack: {
			module: {
				loaders: [
					{test: /\.js$/,	exclude: [/node_modules/], loader: 'ng-annotate!babel'},
					{test: /\.html$/, loader: 'raw'},
					{test: /\.scss$/, loader: 'style!css!sass'},
					{test: /\.css$/, loader: 'style!css'}
				]
			}
		},
		webpackServer: {
			noInfo: true
		},
		reporters: ['spec'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['Chrome'],
		singleRun: true
	});
};
