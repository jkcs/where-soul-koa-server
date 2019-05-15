import Constants from './Constant'

export default class Result {
  private code: number
  private msg: string
  private data: any

  constructor (code?: number, msg?: string, data?: any) {
    this.code = code
    this.data = data
    this.msg = msg
  }

  toString () {
    return this
  }

  public static success (data?: any, msg?: string) {
    return new Result(Constants.SUCCESS, msg, data)
  }

  public static error (msg?: any) {
    return new Result(Constants.ERROR, msg)
  }

  public static argError () {
    return new Result(Constants.ARG_ERROR, '参数异常！')
  }

  public static unknownError () {
    return new Result(Constants.UNKNOWN_EXCEPTION, '未知错误，请稍后重试！')
  }
}
