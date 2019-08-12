import PackageManage from './PackageManage'
// 总管理者
export default class Manager {
  public static resourcesDir: string = ''

  constructor (resourcesDir: string) {
    Manager.resourcesDir = resourcesDir
  }

  public init (): void {
    new PackageManage().initScan()
  }
}
