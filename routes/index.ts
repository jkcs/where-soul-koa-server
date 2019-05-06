// @ts-ignore
const router = require('koa-router')()

router.get('/', async (ctx: { render: (arg0: string, arg1: { title: string; }) => void; }, next: any) => {
  await ctx.render('index.ts', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx: { body: string; }, next: any) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx: { body: { title: string; }; }, next: any) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
