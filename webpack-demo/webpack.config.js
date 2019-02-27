const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'this is the title',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/index.html',
    })]
};
