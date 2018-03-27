const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
		mode: 'develoment',
		entry: {
			index: './src/index.js',
			app: './src/app.js'
		},
		module: {
			rules: [
				{
					test: /\.(jsx|js)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					}
				}
			]
		},
		output: {
			path: path.resolve(__dirname, "dist"), // string,
			filename: 'static/js/[name]_bundle.js'
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'webpack.V4 react',
				template: './src/index.html'
			})
		]
}
