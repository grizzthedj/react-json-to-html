
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './demo'),
  entry: {
    app: ['./index.js','../src/App.js']
  },
  output: {
    path: path.resolve(__dirname, './demo/public'),
    filename: 'demo.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets:['es2015','react']
      }
    }]
  }
};
