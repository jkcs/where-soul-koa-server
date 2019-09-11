import { Value } from '../../decorator/YamlDecorator'
import { Component } from '../../decorator/ContainerDecorator'
import ControllerContainer from '../container/ControllerContainer'
import filter from '../../../src/filter'
import Log from '../log/Log'
const Koa = require('koa')
// Middleware
const json = require('koa-json')
const koaOnerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
// const logger = require('koa-logger')

const http = require('http')
// const debug = require('debug')('demo:server')

@Component
export default class KoaServer {
  @Value('koa.port')
  private port: string
  private koa: any
  private server: any

  public run (): void {
    this.koa = new Koa()
    this.configFilter()
    this.configMiddleware()
    this.configController()
    this.initListen()
  }

  public initListen (): void {
    this.server = http.createServer(this.koa.callback())
    this.server.listen(this.port || '9000')
    this.handleHttpError()
    this.handleHttpListening()
  }

  private configFilter (): void {
    this.koa.use(filter)
  }

  private configController (): void {
    const routes = ControllerContainer.exportRouter()
    this.koa.use(routes)
  }

  private configMiddleware (): void {
    koaOnerror(this.koa)
    this.koa.use(bodyparser({
      enableTypes: ['json', 'form', 'text']
    }))
    this.koa.use(json())
    // this.koa.use(logger())
    this.handleKoaLogger()
    this.handleKoaError()
  }

  private handleKoaLogger (): void {
    // logger
    this.koa.use(async (ctx: { method: any; url: any; }, next: () => void) => {
      const start = new Date().getTime()
      await next()
      const ms = new Date().getTime() - start
      Log.i(`${ctx.method} ${ctx.url} - ${ms}ms`)
    })
  }

  private handleKoaError (): void {
    this.koa.on('error', (err: any, ctx: any) => {
      Log.e('server error', err, ctx)
    })
  }

  private handleHttpError (): void {
    this.server.on('error', (error: { syscall: string; code: any; }) => {
      if (error.syscall !== 'listen') {
        throw error
      }
      const bind = typeof this.port === 'string'
        ? 'Pipe ' + this.port
        : 'Port ' + this.port

      // handle specific listen errors with friendly messages
      if (error.code === 'EACCES') {
        Log.e(bind + ' requires elevated privileges')
        process.exit(1)
      } else if (error.code === 'EADDRINUSE') {
        Log.e(bind + ' is already in use')
        return process.exit(1)
      } else {
        throw error
      }
    })
  }
  private handleHttpListening (): void {
    this.server.on('listening', () => {
      const addr = this.server.address()
      const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
      Log.i('Listening on ' + bind)
    })
  }
}
