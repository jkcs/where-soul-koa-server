/**
 * 全局异常捕获
 */

import Result from '../utils/Result'
// 异常拦截器
module.exports = async (ctx: any, next: any) => {
  try {
    await next()
    // 对 404 状态码处理
    if (ctx.response.status === 404) {
      ctx.body = Result.noFoundError()
    }
  } catch (e) {
    // 对接口异常进行捕获
    ctx.body = Result.unknownError()
    console.error(e)
  }
}
