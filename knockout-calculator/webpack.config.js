var webpack = require('webpack');

module.exports = {
  entry: './src/main',
  output: {
    path: __dirname + '/bin',
    filename: 'ko-calculator.js',
    libraryTarget: 'amd'
  },

  module: {

    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html$/, exclude: /node_modules/, loader: 'raw-loader'}

    ]
  },
  devServer: {
    contentBase: './bin'
  }
};
