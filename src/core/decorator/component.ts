import Container from '../container/Container'

let container:Container = new Container()

export function Component (constructor: any) {
  container.createBean<any>(constructor.name, constructor)
}

@Component
export class test {
  i: number = 0
  constructor () {
    this.i++
    console.log(this.i)
  }
}
