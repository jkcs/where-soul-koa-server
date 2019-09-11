import ControllerContainer from '../model/container/ControllerContainer'

export function Controller (target: any) {
  ControllerContainer.createRouter(target.name)
}

export function RequestMapping (controllerPrefix: string) {
  return function (target: any) {
    const router:any = ControllerContainer.getRouter(target.name)
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
    // 保存原函数
    let fn: any = descriptor.value
    let router: any = ControllerContainer.getRouter(target.constructor.name)
    router.get(url, fn.bind(target))
  }
}

export function Post (url: string) {
  return function <T> (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
    // 保存原函数
    let fn: any = descriptor.value
    let router: any = ControllerContainer.getRouter(target.constructor.name)
    router.post(url, fn.bind(target))
  }
}

export function Put (url: string) {
  return function <T> (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
    // 保存原函数
    let fn: any = descriptor.value
    let router: any = ControllerContainer.getRouter(target.constructor.name)
    router.put(url, fn.bind(target))
  }
}

export function Delete (url: string) {
  return function <T> (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
    // 保存原函数
    let fn: any = descriptor.value
    let router: any = ControllerContainer.getRouter(target.constructor.name)
    router.delete(url, fn.bind(target))
  }
}
