const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.resolve('sadasdsa:'+__dirname,'../dist'))
module.exports = {
	context: __dirname,
	entry: {
		app: path.resolve(__dirname,'../app/app.js')
	},
	output: {
		path:  path.resolve(__dirname,'../dist'),
		filename: '[name].[hash:4].js',
    	chunkFilename: 'chunks/[name].[hash:4].js'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname,'../dist'),
		index: 'index.html',
		port: 5050,
		open: true
	},
	module: {
		rules: [
			{
				test: /.\jsx?$/,
				use:[{
					loader: 'babel-loader',
					options: {
						"presets":["react","es2015"]
					}
				}],
				exclude: /node_modules/,
				include: path.resolve(__dirname,'../app')
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin(
			[path.resolve(__dirname,'../dist')],
			{
			    root: path.resolve(__dirname, '../'),    // 设置root
			    verbose: true
		}),
		new HtmlWebpackPlugin({
	      template: path.resolve(__dirname,'../app/index.html'),
		  title: '使用babel',
		  filename: 'index.html',
		  inject: 'body'
	  }),
	  // // 构建优化插件
	  // new webpack.optimize.CommonsChunkPlugin({
	  //   name: 'vendor',
	  //   filename: 'vendor-[hash:4].min.js',
	  // }),
	  new webpack.DefinePlugin({
	    'process.env.NODE_ENV': '"production"',
	  }),
	]
}
