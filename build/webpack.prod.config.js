const webpackBaseConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  mode: "production",
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [new HtmlWebpackPlugin(
    {
      title: 'production environment',
      template: '!!ejs-loader!./src/template/index.ejs',
      inject: false
    }
  )],
})