const path = require('path')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const happypack = require('happypack');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


function resolve (dir) {
  return path.join(__dirname, dir);
}

exports.assetsPath = function(_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
      './' : './'

  return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/main.js',
  output: {
    // publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    overrideBrowserslist: ['last 30 versions', ">2%", "Firefox >=10", "ie 6-11"]
                  })
                ]
              }
            }
          }
        ],
      },
      // {
      //   test: /\.css$/i,
      //   use: [ 
      //     MiniCssExtractPlugin.loader,
      //     'css-loader' ,
      //     // 'sass-loader',
      //     // 'postcss-loader',  // style-loader css-loader postcss-loader 区别
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         postcssOptions: {
      //           plugins: [
      //             [
      //               'postcss-preset-env',
      //               {
      //                 // 其他选项
      //               },
      //             ],
      //           ],
      //         },
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.less$/i,
      //   use: [ 'css-loader', 'less-loader' ]
      // },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'happypack/loader?id=happyBabel'
        }
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/preset-env']
        //   }
        // }
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
          outputPath: './images/',
          publicPath: '../images',
          esModule: false,
          name: '[name].[hash].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000,
          outputPath:'media/',
          publicPath: '../media',
          name: '[name].[hash].[ext]'      
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000,
          outputPath:'fonts/',
          publicPath: '../fonts',
          name: '[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new vueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),
    new happypack({
      id: 'happyBabel',
      loaders:['babel-loader?cacheDirectory']
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
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