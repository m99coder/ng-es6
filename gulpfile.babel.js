'use strict';

import del from 'del';
import historyApiFallback from 'connect-history-api-fallback';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import serve from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

let root = 'src';

let paths = {
	dest: path.join(__dirname, 'dist'),
	entry: [
		'babel-polyfill',
		path.join(__dirname, root, 'app/app.js')
	]
};

gulp.task('webpack', ['clean'], (cb) => {
	const config = require('./config/webpack.prod');
	config.entry.app = paths.entry;

	webpack(config, (err, stats) => {
		if (err) {
			throw new gutil.PluginError('webpack', err);
		}

		gutil.log('[webpack]', stats.toString({
			colors: false,
			chunks: false,
			errorDetails: true
		}));

		cb();
	});
});

gulp.task('serve', () => {
	const config = require('./config/webpack.dev');
	config.entry.app = [
		'webpack-hot-middleware/client?reload=true'
	].concat(paths.entry);

	var compiler = webpack(config);

	serve({
		port: process.env.PORT || 3000,
		open: false,
		server: {baseDir: root},
		middleware: [
			historyApiFallback(),
			webpackDevMiddleware(compiler, {
				stats: {
					colors: false,
					chunks: false,
					modules: false
				},
				publicPath: config.output.publicPath
			}),
			webpackHotMiddleware(compiler)
		]
	});
});

gulp.task('clean', (cb) => {
	del([paths.dest]).then(function(paths) {
		gutil.log('[clean]', paths);
		cb();
	})
});

gulp.task('default', ['serve']);
