// @ts-ignore
const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx: { body: string; }, next: any) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx: { body: string; }, next: any) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
