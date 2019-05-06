const routerUsers = require('koa-router')()

routerUsers.prefix('/users')

routerUsers.get('/', function (ctx: { body: string; }, next: any) {
  ctx.body = 'this is a users response!'
})

routerUsers.get('/bar', function (ctx: { body: string; }, next: any) {
  ctx.body = 'this is a users/bar response'
})

module.exports = routerUsers
