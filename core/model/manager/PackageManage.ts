import { Value } from '../../decorator/YamlDecorator'
import { Manger } from '../../decorator/ContainerDecorator'
const glob = require('glob')
const { resolve } = require('path')

// 包管理
@Manger
export default class PackageManage {
  @Value('package.scan')
  scanPackage: string

  // 初始化扫描
  public initScan (rootDir: string) {
    let pattern = resolve(rootDir, this.scanPackage, './**/*.{js,ts}')
    glob.sync(pattern)
      .forEach((item: any) => {
        require(item)
      })
  }
}
