const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
				test: /\.css$/,
				use: [
			          'style-loader',
			          {
						  loader: 'css-loader',
						  options: {
							  importLoaders: 1 //css-loader后面指定一个loader（即postcss）来处理import来的css文件
						  }
					  },
			          'postcss-loader'
		        ]
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
				test: /\.js$/,
				use:[
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']//或者在package.json中添加'babel':{'presets': ''@babel/preset-env'}
						}
					}
				],
      			exclude: [path.resolve(__dirname,'node_modules')],
				include: [path.resolve(__dirname,'src')]
			},
			{
		    	test: /\.html$/,
		    	use: [{
		     		loader: 'html-loader',
		      		options: {
		        		minimize: true
					}
		      	}]
		    }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			title: '使用babel',
			filename: 'index.html',
			inject: 'body'
		})
	]
}
