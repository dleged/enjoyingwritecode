const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const WebpackDevServer = require("webpack-dev-server");

module.exports = {
	entry: './public/js/app.js',//JavaScript入口的执行文件
	output: {
		filename: 'bundle.js',// 把所有依赖的模块合并输出到一个 bundle.js 文件
		path: path.resolve(__dirname,'./assets/build')//输出文件目录
	},
	module: {
		rules: [{
			test: /\.css$/,
			loaders: ExtractTextPlugin.extract({
	            // 转换 .css 文件需要使用的 Loader
	  		    fallback: "style-loader?minimizer",
      			use: "css-loader"
	        })
		}]
	},
	plugins: [
		new ExtractTextPlugin({
			// 从 .js 文件中提取出来的 .css 文件的名称
      		filename: `[name]_[contenthash:8].css`
    	})
    	// ,new WebpackDevServer({
    	// 	contentBase: "/",
  			// hot: true
    	// })
	]
}
