/**
 * 所有过滤器都在此注册
 */

let ExceptionFilter = require('./ExceptionFilter')
module.exports = async (ctx: any, next: any) => {
  await ExceptionFilter(ctx, next)
}
