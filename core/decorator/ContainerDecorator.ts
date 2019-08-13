import BeanContainer from '../model/container/BeanContainer'
import 'reflect-metadata'

export function Component (target: any) {
  BeanContainer.Instance.createBean(target.name, target)
}

export function Service (target: any) {
  Component(target)
}

export function Manger (target: any) {
  Component(target)
}

export function AutoWired (target: any, propertyKey: string) {
  let className = Reflect.getMetadata('design:type', target, propertyKey).name
  target[propertyKey] = BeanContainer.Instance.getBean(className)
}
