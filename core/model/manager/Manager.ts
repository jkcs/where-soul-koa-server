import PackageManage from './PackageManage'
import { AutoWired, Manger } from '../../decorator/ContainerDecorator'
// 总管理者
@Manger
export default class Manager {
  // // 根目录文件夹
  // public static resourcesDir: string = ''

  @AutoWired
  private packageManage: PackageManage

  public init (rootDir: string): void {
    this.packageManage.initScan(rootDir)
  }
}
