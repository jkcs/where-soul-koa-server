import UserService from '../../src/service/UserService'
import Result from '../../src/utils/Result'
import { isEmpty } from '../../src/utils/ObjectUtils'
import User from '../../src/entity/Users'

const routerUsers = require('koa-router')()

routerUsers.get('/getUserById', async (ctx: { query: any, body: any }) => {
  // if (!ctx.query.id) {
  //   return (ctx.body = Result.argError())
  // }
  // let newVar = await UserService.getUserById(ctx.query.id)
  // if (!newVar) {
  //   ctx.body = Result.error('未找到该用户！')
  // } else {
  //   ctx.body = Result.success(newVar)
  // }
})

routerUsers.post('/login', async (ctx: { request: any, body: any }) => {
  // let { username, password } = ctx.request.body
  // if (isEmpty(username, password)) {
  //   return (ctx.body = Result.argError())
  // }
  // let newVar = await UserService.login(username, password)
  // if (!newVar) {
  //   ctx.body = Result.error('用户名或密码错误！')
  // } else {
  //   ctx.body = Result.success(newVar)
  // }
})

routerUsers.post('/register', async (ctx: { request: any, body: any }) => {
  // let { username, password } = ctx.request.body
  // if (isEmpty(username, password)) {
  //   return (ctx.body = Result.argError())
  // }
  // let user = new User({ username, password })
  // let newVar = await UserService.register(user)
  // if (!newVar) {
  //   ctx.body = Result.error('注册失败！')
  // } else {
  //   ctx.body = Result.success(newVar, '注册成功！')
  // }
})

module.exports = routerUsers
