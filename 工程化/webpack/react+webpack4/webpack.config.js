const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//cnpm i -D extract-text-webpack-plugin@next
const CleanWebpackPlugin = require('clean-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
		devtool: 'eval-source-map',
		mode: 'develoment',
		entry: {
			vendor: ['./src/scripts/jquery.js'],
			app: './src/app.js',
			index: './src/index.js'
		},
		output: {
			path: path.resolve(__dirname, "dist"), // string,
			filename: 'static/js/[name].[hash:4].js'
		},
		resolve: {
			extensions: ['.js', '.less', '.css', '.png', '.jpg'], //第一个是空字符串! 对应不需要后缀的情况.
			alias: {
				jquery: path.resolve(__dirname,'./src/scripts/jquery.js')
			}
		},
		module: {
			rules: [
				{
					test: /\.(jsx|js)$/,
					exclude: /node_modules/,
					include: path.resolve(__dirname, "src"),
					use: 'babel-loader'
				},
				{
					test: /\.(css|sass)$/,
					include: path.resolve(__dirname, "src"),
					use: ExtractTextPlugin.extract({
	          fallback: 'style-loader',
	          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
	          use: [{
									loader: 'css-loader',
									options: {
                    url: false,
                    minimize: true,
                    sourceMap: true
                	}
							},
							{
								loader: 'postcss-loader',
								options: {
									options: {
										importLoaders: 1,
										plugin: [
											require('autoprefixer')
										]
									}
								}
							},
							'sass-loader']
	        })
				}
			]
		},
		optimization: {
			splitChunks: {
				name: "vendor",// 将entry名为vendor的公共模块提取，生成名为`manifest`的chunk
        minChunks: Infinity //Infinity
			}
		},
		plugins: [
			new CleanWebpackPlugin(['dist/']),
			new HtmlWebpackPlugin({
				title: 'webpack.V4 react',
				favicon: './src/icon.png',
				template: './src/index.html',
				minify: { //集成html-minifier
					inifyCSS: true,
					minifyJS: true,
					removeAttributeQuotes: true //移除属性的引号 可解决#Cannot use 'in' operator to search for 'html5' in true
				},
      	inject: 'body',
				cache: true //默认值是 true。表示只有在内容变化时才生成一个新的文件
			}),
			// new OptimizeCssAssetsPlugin({
	    //   assetNameRegExp: /\.optimize\.css$/g,
	    //   cssProcessor: require('cssnano'),
	    //   cssProcessorOptions: { discardComments: { removeAll: true } },
	    //   canPrint: true
	    // }),
			new ExtractTextPlugin('static/css/main.css')
		]
}
