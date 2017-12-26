//模块化思想
//1 启动server webpack-dev-server
//2 模块化开发commonjs
//3 版本号控制 hash或者chunkhash
//4 css，sass引入
//5 html自定义模板
//6 抽离css
//7 压缩合并JS
//8 用babel编译es6,需要创建.babelrc文件
//9 mock数据(npm i json-server -g 搭建虚拟服务器)
//10 external外部配置文件(开发依赖)，例如项目用到jQuery
//11 file-loader处理图片

const path = require('path');
const webpack = require('webpack');
// 配置 HTML模板,插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 抽离css,处理对应的less，css
//{
// 	test: /\.css$/,
// 	use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
//},
//{
// 	test: /\.less$/i,
// 	use: extractLESS.extract([ 'css-loader', 'less-loader' ])
//}
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './public/js/app.js',//JavaScript入口的执行文件
	// 如果有多个入口
    //entry: ['./src/js/serch.js','./src/index.js'],
    // 入口以对象的话，称为chunks，
    // 对象行形式 filename不能是一个了
    //entry:{
    //    app:'./src/js/index.js',
    //    serch:'./src/js/serch.js'
    //},
    //output:{
    //    path:__dirname+'/build',
    //    //3.1 如何配置版本号，清除缓存
    //    //filename:'[name]_[hash].js'
    //    filename:'[name]_[chunkhash].js'
    //},
    // 配置出口（打包的输出路径）
	output: {
		publicPath: '/',
		filename: 'bundle.js',// 把所有依赖的模块合并输出到一个 bundle.js 文件
		//filename:'bundle.js',
        //filename:'app_[hash].js'
		path: path.resolve(__dirname,'./assets/build')//输出文件目录
	},
	devtool: 'eval-source-map',
	// 配置服务器
	devServer: {
        contentBase: './views', //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true,
        port: 9000,
        // 配置后台接口
        // proxy: {//代理属性
        //     //路由映射
        //     "/api":{
        //         target:'http://localhost:9000/',
        //         pathRewrite: {"^/api":""}
        //     }
        // }
    },
    // 引入loaders
	module: {
		rules: [
			// 解析css,css-loader
			{
				test: /\.css$/,
				//loader:'style-loader!css-loader'
                //处理css
				use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                      {
                        loader: 'css-loader',
                        // 压缩CSS
                        options:{
                          minimize: true
                        }
                      }
                    ]
                })
			},
			{// SASS的.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
				test: '/\.scss$/',
				use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        "css-loader",
                        "sass-loader"
                    ]
                })
			},
			// 处理图片
            {
                test:/\.(jpg|png|gif)$/,
                use:{
                    loader:'url-loader',
                    options: {
                        limit: 8192
                  }
                }
            },
            {
                test:/\.(woff|woff2|eot|ttf|svg)$/,
                use:{
                    loader:'url-loader',
                    options: {
                        limit: 100000
                  }
                }
            },
            // 编译es6
            {
                test:'/\.js$/',
                exclude:/node_modules/,
                use:'babel-loader'
                // 在根目录创建.babelrc文件，并输入配置
                // use: [{
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['es2015']
                //     }
                // }]
            }
        ]
	},
	// 配置插件
	plugins: [
    	// 配置HTML模板插件
	    new HtmlWebpackPlugin({
	    	// 配置参数,html的title
            title: 'webpack的配置',
            abc: '自定义输出',
            // 输出后html的名字，可以自定义
            filename: 'index.html',
            // html的模板,也可以是xxx.html
            //template: '../views/index.html'
	    }),
	    // 代码优化：合并以及压缩代码
	    new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            // 输出不显示警告
            compress:{
                warnings:false
            },
            // 输出去掉注释
            output:{
                comments:false
            }
        }),
        // css抽离
        new ExtractTextPlugin({
            filename:'main.min.css',
            // filename:'app_[chunkhash].css',
            disable:false,
            allChunks:true
        }),
        new webpack.HotModuleReplacementPlugin(),
    	//new webpack.HotModuleReplacementPlugin(),
    	// new HtmlWebpackPlugin({
     	//     	template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
     	//}),
    	new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
	],
	// 项目依赖的外部文件，如jQuery
    // 这样配置之后，最后就不会把jquery打包到build.js里，而且
    // var $=require('jquery');这样仍然可以用
    
    externals:{
       jquery:'window.jQuery'
    }
}