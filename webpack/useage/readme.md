### hash优化
  - [hash] 包含一个项目构建生成的hash值,只要变更任何一个代码，整个hash就会变；
  - [chunkhash] 根据入口，不同的依赖关系，解析生成的hash值；
  - [contenthash] 只根据文本内容生成hash,即内容变，hash值才变；

    - 为了一份理想的缓存文件，我们需要做这些事情：
    - 抽离 boilerplate（[runtime & manifest）
    - 将 module identifier 默认的数字标识方式转成使用路径标识
    - JS 文件使用 chunkhash
    - 抽离的 CSS 样式文件使用 contenthash
    - gif|png|jpe?g|eot|woff|ttf|svg|pdf 等使用 hash
    - 设置 namedChunks 为 true`







    [Top Webpack plugins for faster development]https://codeburst.io/top-webpack-plugins-for-faster-development-a2f6accb7a3e;
    [webpack 4: Code Splitting, chunk graph and the splitChunks optimization]https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
