import { configure, getLogger } from 'log4js'
configure({
  appenders: {
    out: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: '%[[%d{yyyy-MM-dd hh:mm:ss}] [%p] %m'
      }
    }
  },
  categories: {
    default: {
      appenders: [ 'out' ],
      level: 'info'
    }
  }
})
const logger = getLogger()

export default class Log {
  static log4: any = logger

  static e (...args: any) {
    Log.log4.error(...args)
  }
  static w (...args: any) {
    Log.log4.warn(...args)
  }
  static d (...args: any) {
    Log.log4.debug(...args)
  }
  static t (...args: any) {
    Log.log4.trace(...args)
  }
  static i (...args: any) {
    Log.log4.info(...args)
  }
  static f (...args: any) {
    Log.log4.fatal(...args)
  }
}
