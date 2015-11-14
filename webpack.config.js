var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/build',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: "./",
    hot: true
  }
};