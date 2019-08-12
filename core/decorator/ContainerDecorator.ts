import Container from '../model/Container'
import 'reflect-metadata'

export function Component (target: any) {
  Container.Instance.createBean(target.name, target)
}

export function Service (target: any) {
  Component(target)
}

export function AutoWired (target: any, propertyKey: string) {
  let className = Reflect.getMetadata('design:type', target, propertyKey).name
  target[propertyKey] = Container.Instance.getBean(className)
}
