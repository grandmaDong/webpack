const path = require('path')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [ 
          MiniCssExtractPlugin.loader,
          'css-loader' ,
          'ssass-loader',
          // 'postcss-loader'  // style-loader css-loader postcss-loader 区别
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // 其他选项
                    },
                  ],
                ],
              },
            }
          }
        ]
      },
      {
        test: /\.less$/i,
        use: [ 'css-loader', 'less-loader' ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'images/',
          name: '[name].[ext]'
        }
      },
      // {
      //   test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000,          
      //   }
      // },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'fonts/',
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new vueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve('../build'),
      'Style': resolve('src/style'),
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 400000
  }
}