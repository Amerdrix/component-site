var webpack = require('webpack');

module.exports = {
  entry: './src/main',
  output: {
    path: __dirname + '/bin',
    filename: 'clock.js',
    libraryTarget: 'amd'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  externals: {
    riot: 'riot'
  },
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      { test: /\.js$|\.tag$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    contentBase: './bin',
    headers: { "Access-Control-Allow-Origin": "*" }
  }
};
