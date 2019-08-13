// import Manager from './core/model/manager/Manager'
// import ControllerContainer from './core/model/container/ControllerContainer'
// const manager = new Manager(__dirname)
// Manager.init()

// const test = require('./routes/test')
// const path = require('path')
const Koa = require('koa')
const koa = new Koa()
// const views = require('koa-views')
const json = require('koa-json')
const koaOnerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const routes = require('./routes')
// const routes = ControllerContainer.exportRouter()
const filter = require('./src/filter')

// error handler
koaOnerror(koa)

koa.use(filter)

// middlewares
koa.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
koa.use(json())
koa.use(logger())
// koa.use(require('koa-static')(path.resolve(__dirname, '/public')))

// koa.use(views(path.join(__dirname, '/views'), {
//   extension: 'pug'
// }))

// logger
koa.use(async (ctx: { method: any; url: any; }, next: () => void) => {
  const start = new Date().getTime()
  await next()
  const ms = new Date().getTime() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
koa.use(routes)

// error-handling
koa.on('error', (err: any, ctx: any) => {
  console.error('server error', err, ctx)
})
module.exports = koa
