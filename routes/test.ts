// @ts-ignore
const routerTest = require('koa-router')()

routerTest.prefix('/test')

routerTest.get('/', function (ctx: any, next: any) {
  ctx.body = 'this is a test response!'
})

routerTest.get('/bar', function (ctx: any, next: any) {
  ctx.body = 'this is a users/bar response'
})

module.exports = routerTest
