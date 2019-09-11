import Manager from '../manager/Manager'
import { AutoWired } from '../../decorator/ContainerDecorator'
import KoaServer from './KoaServer'
import Log from '../log/Log'

export default class ApplicationRunner {
  @AutoWired
  private static manager: Manager

  @AutoWired
  private static koaServer: KoaServer

  public static run (options: { rootDir: string }): void {
    Log.i('ApplicationRunner run!')
    let { rootDir } = options
    this.manager.init(rootDir)
    this.koaServer.run()
  }
}
