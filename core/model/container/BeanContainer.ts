/**
 * bean容器
 */
export default class BeanContainer {
  public static readonly _instance: BeanContainer = new BeanContainer()
  map: any = new Map()

  public static get Instance (): BeanContainer {
    return BeanContainer._instance
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

  toString (): string {
    let tmp: string[] = []
    for (let [key, value] of this.map.entries()) {
      tmp.push(`[${key}, ${value}]`)
    }
    return tmp.join(',')
  }
}
