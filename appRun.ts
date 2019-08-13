import ApplicationRunner from './core/model/runner/ApplicationRunner'
import BeanContainer from './core/model/container/BeanContainer'

ApplicationRunner.run({
  rootDir: __dirname
})

console.log(BeanContainer.Instance.toString())
