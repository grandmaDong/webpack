### 6. webpack 配置（生产环境&测试环境）
   >基本配置： vue 环境示例

----
```
  entry: {
    main: 'main.js'
  },
  output: {
    path: path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/, (处理vue文件)
        loader: 'vue-loader',
      }，
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: ['css-loader?minimize', 'autoprefixer-loader'],
            fallback: 'style-loader'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            use: ['css-loader?minimize','autoprefixer-loader', 'less-loader'],
            fallback: 'style-loader'
        }),
      },
      {
        test: /\.js[x]?$/,  // 运行在node上的webpack是单线程的，使用happypack能同时处理多个任务（注： happypack对file-loader，url-loader不友好，所以不建议使用）
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: 'happypack/loader?id=happybabel'
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=1024'
      },
      ...{处理js文件包括转ES最新处理，处理css各种样式文件，处理图片/音频文件}
    ]
  }
```

>测试环境配置
```
module.exports = merge(webpackBaseConfig, {
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'iView admin v' + package.version,
      filename: '../index.html',
      inject: false
    }),
    devServer: {
      hot: true,
      inline:true,
      proxy: {
        // 请求到 '/api' 下 的请求都会被代理到 target： http://debug.xxx.com 中
        '/server': {
          // target: 'http://xxxx.xxxx.com',
          secure: false, // 接受 运行在 https 上的服务
          changeOrigin: true,
          pathRewrite: {'^/server' : ''}
        }
      }
    }
  ]
})
```

>生产环境
```
module.exports = merge(webpackBaseConfig, {
  output: {
      publicPath: 'http://xxx.com/dist/', //这部分为你的服务器域名 
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].chunk.js'
    },
    plugins: [
      new cleanWebpackPlugin(['dist/*'], {
        root: path.resolve(__dirname, '../')
      }),
      new ExtractTextPlugin({
        filename: '[name].[hash].css',
        allChunks: true
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new HtmlWebpackPlugin({
        title: 'fileTitle',
        favicon: './td_icon.ico',
        filename: '../index.html',
        template: '!!ejs-loader!./src/template/index.ejs',
        inject: false
      })
    ]
})
```
