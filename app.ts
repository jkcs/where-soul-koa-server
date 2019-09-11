import ApplicationRunner from './core/model/runner/ApplicationRunner'
import Log from './core/model/log/Log'

ApplicationRunner.run({
  rootDir: __dirname
})
Log.i('app run successful!')
