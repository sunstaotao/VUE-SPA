let HtmlWebpackPlugin = require('html-webpack-plugin')
let path = require('path')

let Config = require('./webpack.config')
Config.output.publicPath = '/'
Config.plugins[Config.plugins.length-1] = new HtmlWebpackPlugin({
  filename: 'app/',
  template: path.resolve(__dirname,'../app/index/index.html'),
  inject: true
})
module.exports = Config
