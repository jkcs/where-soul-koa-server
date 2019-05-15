import Result from '../utils/Result'

module.exports = async (ctx: any, next: any) => {
  try {
    await next()
  } catch (e) {
    ctx.body = Result.unknownError()
    console.error(e)
  }
}
