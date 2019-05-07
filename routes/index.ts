const routerIndex = require('koa-router')()

routerIndex.get('/', async (ctx: { render: (arg0: string, arg1: { title: string; }) => void; }, next: any) => {
  await ctx.render('index.pug', {
    title: 'Hello Koa 2!'
  })
})

routerIndex.get('/string', async (ctx: { body: string; }, next: any) => {
  ctx.body = 'koa2 string'
})

routerIndex.get('/json', async (ctx: { body: { title: string; }; }, next: any) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = routerIndex
