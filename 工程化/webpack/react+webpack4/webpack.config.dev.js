// 1.在开发环境不使用babel转码，仅在生产环境使用。本地开发的chrome的es6的兼容性足够好，不需要babel转码，经测试，这一操作可以减少25%的构建时间。如果使用babel，可以开启babel的缓存
//
// 2.在开发环境不使用post-css，关闭压缩css，可以提升10%的速度。
//
// 3.在entry中仅引入当前开发的页面，这一举措可以提升一倍的构建速度，在其他步奏完成后，还需要12秒左右的构建速度，完成该步骤后，仅需五秒的构建时间。
//
// 4.启用代码热更新，想办法捕获热更新，避免热更新时刷新浏览器
//
// 5.启动happypack，并行编译
//
// 6.第三方代码库使用cdn
//
// 7.使用resolve.alias 优化资源的搜索路径，noParse忽略。
//
// 8.使用dll


const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//cnpm i -D extract-text-webpack-plugin@next
const CleanWebpackPlugin = require('clean-webpack-plugin');
const glob = require('glob-all');
const PurifyCSSPlugin = require('purifycss-webpack');
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const happypack = require('happypack');
console.log(path.join(__dirname, 'dist/index.html'));


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
			filename: 'static/js/[name]_bundle.js'
		},
		resolve: {
			extensions: ['.js', '.less', '.css', '.png', '.jpg'], //第一个是空字符串! 对应不需要后缀的情况.
			alias: {
				jquery: path.resolve(__dirname,'./src/scripts/jquery.js')
			}
		},
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			port: 9090,
			host: 'localhost',
			overlay: true,
      open: true,
			compress: true // 服务器返回浏览器的时候是否启动gzip压缩
	 	},
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
		module: {
			rules: [
				{
					test: /\.(jsx|js)$/,
					exclude: /node_modules/,
					include: path.resolve(__dirname, "src"),
					use: [
						{
							loader: 'babel-loader'
						}
					]
				},
				//如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
				{
					test: /\.(css|sass)$/,
					include: path.resolve(__dirname, "src"),
					use: ExtractTextPlugin.extract({
	          fallback: 'style-loader',
	          use: [
							{
									loader: 'css-loader',
									options: {
                    url: false,
                    minimize: true,
                    sourceMap: true
                	}
							},
							'sass-loader'
            ]
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
			// new CleanWebpackPlugin(['dist/static'],{ exclude:  ['index.html'],}),
			new HtmlWebpackPlugin({
				title: 'webpack.V4 react',
				favicon: './src/icon.png',
				template: './src/index.html',
				minify: { //集成html-minifier
					inifyCSS: true,
					minifyJS: true,
					removeAttributeQuotes: true //移除属性的引号 可解决#Cannot use 'in' operator to search for 'html5' in true
				},
				cache: true, //默认值是 true。表示只有在内容变化时才生成一个新的文件
        inject: 'body'
			}),
			new ExtractTextPlugin('static/css/main.css'),
	  ],
    stats: { //object
     assets: true,
     colors: true,
     errors: true,
     errorDetails: true,
     hash: true
    }
}
