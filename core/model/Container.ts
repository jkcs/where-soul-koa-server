export default class Container {
  // static container:Container
  public static readonly _instance: Container = new Container()
  map: any = new Map()
  // constructor () {
  //   this.map = new Map()
  // }

  public static get Instance (): Container {
    return Container._instance
  }

  createBean<T> (className: string, source: T): any {
    this.map.set(className, new (<any>source)())
  }

  updateBean<T> (className: string, source: T): any {
    this.map.set(className, source)
  }

  destroyBean (className: string): boolean {
    this.updateBean(className, null)
    return this.map.delete(className)
  }

  getBean<T> (className: string): T {
    return this.map.get(className)
  }
}
