var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

config.output = {
	filename: '[name].bundle.js',
	publicPath: '/',
	path: path.resolve(__dirname, '../src')
};

module.exports = config;
