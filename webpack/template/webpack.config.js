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
  plugins: []
}

module.exports = config;



