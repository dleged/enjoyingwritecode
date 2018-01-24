const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:{
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js'
	} ,
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name]-[chunkhash].js',
		publicPath: 'http://cdn.com'//设置src引入文件的上线路径
	},
	plugins: [
		//html 中可以拿到htmlWebpackPlugin.files.chunks.page1.entry的值，即page1打包后的js文件【ejs】
		new HtmlWebpackPlugin({
			title: 'html-webpack-plugin',
			template: 'index.html',
			filename: 'pages/index.html',
			inject: 'false',
			date: new Date(),
			//压缩
			// minify: {
			// 	removeComments: true,
			// 	collapseWhitespace: true
			// }
		})
	]
}
