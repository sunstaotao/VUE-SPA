let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')
let path = require('path')

let Config = require('./webpack.config')
Config.output.publicPath = '/'
//模块热替换插件
Config.plugins.unshift(new webpack.optimize.OccurrenceOrderPlugin(),new webpack.HotModuleReplacementPlugin(),new webpack.NoEmitOnErrorsPlugin())

Config.plugins[Config.plugins.length-1] = new HtmlWebpackPlugin({
  filename: 'app/',
  template: path.resolve(__dirname,'../app/index/index.html'),
  inject: true,
})

var devClient = 'webpack-hot-middleware/client';
// Object.keys(Config.entry).forEach(function (name, i) {
//   var extras = [devClient]
//   Config.entry[name] = extras.concat(Config.entry[name])
// })
module.exports = Config
