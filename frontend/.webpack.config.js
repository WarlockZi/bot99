const path = require('path');

console.log('f')
module.exports = (env) = {

  mode: 'development',
  entry: '.src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};


