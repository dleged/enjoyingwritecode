const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const WebpackDevServer = require("webpack-dev-server");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './public/js/app.js',//JavaScript入口的执行文件
	output: {
		filename: 'bundle.js',// 把所有依赖的模块合并输出到一个 bundle.js 文件
		path: path.resolve(__dirname,'./assets/build')//输出文件目录
	},
	devtool: 'eval-source-map',
	devServer: {
        contentBase: './views', //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true,
        port:9000
    },
	module: {
		rules: [
			{
				test: /\.css$/,
				loaders: ExtractTextPlugin.extract({
		            // 转换 .css 文件需要使用的 Loader
		  		    fallback: "style-loader?minimizer",
	      			use: "css-loader"
		        })
			},
		    {
		      // 对非文本文件采用 file-loader 加载
		      test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
		      use: ['file-loader'],
		    }
		]
	},
	plugins: [
		new ExtractTextPlugin({
			// 从 .js 文件中提取出来的 .css 文件的名称
      		filename: `[name]_[contenthash:8].css`
    	}),
    	new CleanWebpackPlugin(['assets']),
	    //new HtmlWebpackPlugin(),
    	//new webpack.HotModuleReplacementPlugin(),
    	// new HtmlWebpackPlugin({
     //        template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
     //    }),
    	new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    	// ,new WebpackDevServer({
    	// 	contentBase: "/",
  			// hot: true
    	// })
	]
}