const path = require('path');
const uglifyjsPlugin = require('uglifyjs-webpack-plugin');//压缩js
const htmlPlugin = require('html-webpack-plugin');//html文件放入src的骚操作,html打包
const ExtractTextPlugin = require('extract-text-webpack-plugin');//分离出css文件
const glob = require('glob');//同步html

const publicSrc = path.resolve('dist');
//const extractCSS = new ExtractTextPlugin(publicSrc + '/styles/bundle.css');

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
	      {
			  test: /\.css$/,
			  //分离css文件配置
			  use: ExtractTextPlugin.extract({
				  fallback: 'style-loader',
				  use: [{
					  loader: 'css-loader',
					  options: {
						  importLoaders: 1
					  	}
			  		},
				  	'postcss-loader'
				  ]
			  })
		  },
		  {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use:[{
				loader: 'babel-loader',
				options: {
		          presets: ['env']
		        }
			}],
		  },
		  {
	          test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
	          use:[{
	              loader:'url-loader',//小于500000b的url-loader转换，大于的交给file-loader
	              options:{//url内置了file 只需要引url-loader 大于的会自动交给file处理
	                  limit:5000, //将小于500000b的文件打成base64的格式写入js
	              }
	          }]
          },
          {
            test: /\.(htm|html)$/i,//img图片正确路径配置
            use:[ 'html-withimg-loader']
          }
	    ]
	},
  plugins: [
     new ExtractTextPlugin(publicSrc + '/styles/bundle.css')
  ]
}
