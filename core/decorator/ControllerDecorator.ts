import { Value } from './YamlDecorator'
const compose = require('koa-compose')
const { resolve } = require('path')

export class ControllerConstant {
  @Value('koa.prefix')
  public static prefix: string
  public static routerMap: any = new Map()

  static createRouter<T> (routerName: string): any {
    if (routerName && !ControllerConstant.hasRouter(routerName)) {
      console.log(routerName)
      ControllerConstant.routerMap.set(routerName, require('koa-router')())
    }
  }

  static hasRouter (routerName: string): boolean {
    return ControllerConstant.routerMap.has(routerName)
  }

  static deleteRouter (routerName: string): boolean {
    return ControllerConstant.routerMap.delete(routerName)
  }

  static getRouter<T> (routerName: string): T {
    this.createRouter(routerName)
    return ControllerConstant.routerMap.get(routerName)
  }

  static exportRouter (): any {
    let routers: any[] = []
    ControllerConstant.routerMap.forEach(function (router: any) {
      console.log(ControllerConstant.prefix + router.controllerPrefix)
      router.prefix(ControllerConstant.prefix + router.controllerPrefix)
      routers.push(router.routes())
      routers.push(router.allowedMethods())
    })
    return compose(routers)
  }
}

export function Controller (target: any) {
  ControllerConstant.createRouter(target.name)
}

export function RequestMapping (controllerPrefix: string) {
  return function (target: any) {
    const router:any = ControllerConstant.getRouter(target.name)
    if (controllerPrefix) {
      let firstChar = controllerPrefix.substr(0, 1)
      if (firstChar !== '/') {
        controllerPrefix = '/' + controllerPrefix
      }
    }
    router.controllerPrefix = controllerPrefix
  }
}

export function Get (url: string) {
  return function <T> (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
    Controller(target)
    // 保存原函数
    let fn: any = descriptor.value
    let router: any = ControllerConstant.getRouter(target.name)
    router.get(url, fn)
  }
}
