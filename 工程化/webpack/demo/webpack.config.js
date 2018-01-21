module.exports = {
	//文件入口
	entry: './src/js/app.js',
	//输出文件入口
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'

	},
	//定义需要的插件或者加载器
	module: {
		rules: [
	      { test: /\.css$/, use: ['style-loader','css-loader'] },
	    ]
	}
}
