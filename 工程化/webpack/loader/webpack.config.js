// import { Configuration } from 'webpack';
const ConsoleLogOnBuildWebapckPlugin = require('./my-plugin');
const webpack = require('webpack'); // 访问内置的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type{Configuration}
 */
const config = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    library: 'lib',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: './markdown-loader'
      }
    ],
  },
  plugins: [new webpack.ProgressPlugin(), new ConsoleLogOnBuildWebapckPlugin(), new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
}

module.exports = config;



