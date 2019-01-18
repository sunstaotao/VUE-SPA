let express = require('express')
let webpack = require('webpack')
let Config = require('./webpack.dev.conf')
//创建express实例
let app = express()
let compiler = webpack(Config)


//使用中间件
let devMiddleware = require('webpack-dev-middleware')(compiler,{
  publicPath:Config.output.publicPath,
  stats:{
    color: true,
    chunks: false
  }
})
let hotMiddleware = require('webpack-hot-middleware')(compiler,{
  noInfo: true, publicPath: Config.output.publicPath
})
// 注册中间件
app.use(devMiddleware)
app.use(hotMiddleware)

app.listen(8888,function (err) {
  if (err){
    console.log(err);
  }
  console.log('****Listening at http://localhost:8888');
})
