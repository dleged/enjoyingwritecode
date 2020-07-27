1. 配置babel-loader时，use: [‘babel-loader?cacheDirectory’] cacheDirectory用于缓存babel的编译结果，加快重新编译的速度。另外注意排除node_modules文件夹，因为文件都使用了ES5的语法，没必要再使用Babel转换。
2. 配置externals，排除因为已使用<script>标签引入而不用打包的代码，noParse是排除没使用模块化语句的代码。
3. 配置performance参数可以输出文件的性能检查配置。
4. 配置profile：true，是否捕捉Webpack构建的性能信息，用于分析是什么原因导致构建性能不佳。
5. 配置cache：true，是否启用缓存来提升构建速度。
6. 可以使用url-loader把小图片转换成base64嵌入到JS或CSS中，减少加载次数。
7. 通过imagemin-webpack-plugin压缩图片，通过webpack-spritesmith制作雪碧图。


## 最近遇到的技术难题

1. nestjs的中台服务；