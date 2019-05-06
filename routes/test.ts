// @ts-ignore
const router = require('koa-router')()

router.prefix('/test')

router.get('/', function (ctx: any, next: any) {
  ctx.body = 'this is a test234 response!'
})

router.get('/bar', function (ctx: any, next: any) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
