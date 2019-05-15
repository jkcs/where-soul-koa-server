let ExceptionFilter = require('./ExceptionFilter')
module.exports = async (ctx: any, next: any) => {
  await ExceptionFilter(ctx, next)
}
