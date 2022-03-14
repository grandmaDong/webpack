const webpackBaseConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const utils = require('./utils')


module.exports = merge(webpackBaseConfig, {
  mode: "production",
  output: {
    filename: utils.assetsPath('/js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('/js/[id].[chunkhash].js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'production environment',
      template: '!!ejs-loader!./src/template/index.ejs',
      inject: false
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: true
      },
      sourceMap: true,
      parallel: true
    }),
  ],
  optimization: {
    splitChunks: { // 将node_modules 中的css js 从main.js/css 中分离生成vendors 文件
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
        },
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors'
        }
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
  },
})