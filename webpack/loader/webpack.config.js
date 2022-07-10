// import { Configuration } from 'webpack';


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
  plugins: [],
}

module.exports = config;



