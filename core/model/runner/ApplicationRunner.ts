import Manager from '../manager/Manager'
import { AutoWired } from '../../decorator/ContainerDecorator'
import KoaServer from './KoaServer'

export default class ApplicationRunner {
  @AutoWired
  private static manager: Manager

  @AutoWired
  private static koaServer: KoaServer

  public static run (options: { rootDir: string }): void {
    let { rootDir } = options
    this.manager.init(rootDir)
    this.koaServer.run()
  }
}
