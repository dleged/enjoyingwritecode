const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: [".js", ".json", ".jsx", ".css"]
	},
	module:{
		rules:[
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: require.resolve('eslint-loader'),
        // 应该应用的 loader，它相对上下文解析
        // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
        // 查看 webpack 1 升级指南。
        options: {
          	presets: ["es2015"]
        	}
				}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}
