let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let {VueLoaderPlugin} = require('vue-loader')
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let Config = {
  mode:'development',
  //  入口
  entry: path.resolve(__dirname, '../app/index/index.js'),
  //  输出
  output: {
    //静态资源输出路径
    path: path.resolve(__dirname,'../output/static'),
    //本地编译使用 'static/'   dev-server 使用 '/'
    publicPath: "static/",
    filename: "[name].[hash].js",
    chunkFilename: "[id].[chunkhash].js"
  },
  resolve: {
    extensions: ['js','vue'],
    alias:{
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  module:{
    rules: [
      // {
      //   test: /\.(htm|html)$/,
      //   use: [
      //     'raw-loader'
      //   ]
      // },
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.css$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              publicPath:"static/"
            }
          },
          'css-loader'
        ]
      },
      
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-0'],
          // plugins: ['transform-es2015-arrow-functions']
        }
        
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "../index.html",
      // filename: "index.html",
      template: path.resolve(__dirname,'../app/index/index.html'),
      inject: true
    })
  ]
  
}
module.exports = Config
