import { Value } from '../../decorator/YamlDecorator'
import { Manger } from '../../decorator/ContainerDecorator'
import Log from "../log/Log"
const glob = require('glob')
const { resolve } = require('path')

// 包管理
@Manger
export default class PackageManage {
  @Value('package.scan')
  scanPackage: string

  // 初始化扫描
  public initScan (rootDir: string) {
    Log.i('Start scanning packages')
    let pattern = resolve(rootDir, this.scanPackage, './**/*.{js,ts}')
    glob.sync(pattern)
      .forEach((item: any) => {
        require(item)
      })
    Log.i('Scanning Packet Completion')
  }
}
