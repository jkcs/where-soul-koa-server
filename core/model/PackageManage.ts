// 包管理
import { Value } from '../decorator/YamlDecorator'
import Manager from './Manager'
const glob = require('glob')
const { resolve } = require('path')

export default class PackageManage {
  @Value('package.scan')
  scanPackage: string

  // 初始化扫描
  public initScan () {
    let pattern = resolve(Manager.resourcesDir, this.scanPackage, './**/*.{js,ts}')
    glob.sync(pattern)
      .forEach((item: any) => {
        require(item)
      })
  }
}
