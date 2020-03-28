const webpackBaseConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge')
const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [new HtmlWebpackPlugin(
    {
      title: 'test environment',
    }
  )],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
})