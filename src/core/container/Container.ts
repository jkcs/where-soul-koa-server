import ContainerInterface from './ContainerInterface'

export default class Container implements ContainerInterface {
  map: any

  constructor () {
    this.map = new Map()
  }

  createBean<T> (className: any, source: T): any {
    this.map.set(className, new (<any>source)())
  }

  updateBean<T> (className: any, source: T): any {
    this.map.set(className, new (<any>source)())
  }

  destroyBean (className: any): boolean {
    return this.map.delete(className)
  }

  getBean<T> (className: any): T {
    return this.map.get(className)
  }
}
