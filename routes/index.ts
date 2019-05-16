const compose = require('koa-compose')
const glob = require('glob')
const { resolve } = require('path')

module.exports = (() => {
  let routers: any[] = []
  glob.sync(resolve(__dirname, './**/*.*'))
    .filter((item: any) => !/index\./.test(item))
    .forEach((router: any) => {
      require(router).prefix('/api')
      routers.push(require(router).routes())
      routers.push(require(router).allowedMethods())
    })
  return compose(routers)
})()
