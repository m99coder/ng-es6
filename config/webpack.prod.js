var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.common.js');

config.output = {
	filename: '[name].bundle.js',
	publicPath: '/',
	path: path.resolve(__dirname, '../dist')
};

module.exports = config;
