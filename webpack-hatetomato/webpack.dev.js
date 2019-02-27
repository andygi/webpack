const webpack = require('webpack');
const path = require('path');

/*
* SplitChunksPlugin is enabled by default and replaced
* deprecated CommonsChunkPlugin. It automatically identifies modules which
* should be splitted of chunk by heuristics using module duplication count and
* module category (i. e. node_modules). And splits the chunks…
*
* It is safe to remove "splitChunks" from the generated configuration
* and was added as an educational example.
*
* https://webpack.js.org/plugins/split-chunks-plugin/
*
*/

/*
* We've enabled UglifyJSPlugin for you! This minifies your app
* in order to load faster and run less javascript.
*
* https://github.com/webpack-contrib/uglifyjs-webpack-plugin
*
*/

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},

	entry: 'index.js',

	output: {
		path: path.resolve(__dirname, './dist'),
		chunkFilename: '[name].[chunkhash].js',
		filename: '[name].[chunkhash].js'
	},

	mode: 'development',
	plugins: [
		new UglifyJSPlugin(),
		new HtmlWebpackPlugin({
			title: 'My App',
			filename: 'assets/admin.html'
		})
	],

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};