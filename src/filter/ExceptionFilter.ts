import Result from '../utils/Result'

module.exports = async (ctx: any, next: any) => {
  try {
    await next()
    if (ctx.response.status === 404) {
      ctx.body = Result.noFoundError()
    }
  } catch (e) {
    ctx.body = Result.unknownError()
    console.error(e)
  }
}
