const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractCSS = new ExtractTextPlugin('style/[name]-[hash].css');


module.exports = {
	context: __dirname,
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].bundle.js',
	},
	module: {
		rules: [
			{
		    	test: /\.html$/,
		    	use: [{
		     		loader: 'html-loader',
		      		options: {
		        		minimize: true
					}
		      	}]
		    },
			{
                test: /\.ejs$/,
                loader: 'ejs-loader'
            },
			{
				test: /\.css$/,
				use: extractCSS.extract({
					fallback: 'style-loader',
					use: ['css-loader?importLoaders=1&minimize=true', 'postcss-loader']
				})
				// use: [
			    //       'style-loader',
			    //       {
				// 		  loader: 'css-loader',
				// 		  options: {
				// 			  importLoaders: 1 //css-loader后面指定一个loader（即postcss）来处理import来的css文件
				// 		  }
				// 	  },
				// 	  //style-loader!css-loader 解析使用
	            //       // css postcss-loader后端浏览器优化（加前缀）
	            //       //要先加载 postcss-loader写在后面
	            //       //?importLoaders=1 css import 'xxx.css
			    //       'postcss-loader'
		        // ]
			},
			{
				test: /\.less$/,
				use:[
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					'postcss-loader',
					{
						loader: 'less-loader',
						options: {
							strictMath: true,
				  			noIeCompat: true,
							paths: [
		                        path.resolve(__dirname, "src")
		                    ]
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use:[
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							strictMath: true,
				  			noIeCompat: true,
							paths: [
		                        path.resolve(__dirname, "src")
		                    ]
						}
					}
				]
			},
			{
				test: /\.js$/,
				use:[
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
							//使用方式 npm install --save-dev babel-preset-env 告诉babel如何处理
							//或者在package.json中添加'babel':{'presets': ''@babel/preset-env'}
						}
					}
				],
      			exclude: [path.resolve(__dirname,'node_modules')],
				include: [path.resolve(__dirname,'src')]
			},
			{
				test: /\.(jpg|png|gif|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'images/[name]-[hash].png'
			            }
					}
					//'image-webpack-loader'
				]
			}
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new CleanWebpackPlugin(['./dist']),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			title: '使用babel',
			filename: 'index.html',
			inject: 'body'
		}),
		extractCSS,
		new UglifyJsPlugin({
			test: /\.js($|\?)/i,
		    cache: true,
		    parallel: 4,
		    sourceMap: true,
		    uglifyOptions: {
				output: {
				   beautify: false
				}
		   }
	   }),
		// 提供全局变量_
        new webpack.ProvidePlugin({
        	_: 'lodash',
			$: 'jquery'
        })
	]
}
