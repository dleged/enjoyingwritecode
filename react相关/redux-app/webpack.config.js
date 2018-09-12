const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
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
				test: /\.(jsx|js)?$/,
				exclude: /node_modules/,
				use: [
					'react-hot'
				,{
					loader: 'babel',
					options:{
						preset: ['react','es2015']
					}
				}]
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}
