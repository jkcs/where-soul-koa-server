const typeObj: any = {
  Array: 'Array',
  Object: 'Object'
}

export function loadInObj<T> (obj: any, source: any): T {
  if (isEmpty(source)) {
    return null
  }
  Object.keys(source).forEach(k => {
    obj[k] = source[k]
  })
  return obj
}

export const isEmpty = (...args: any[]): boolean => {
  for (let i = 0; i < args.length; i++) {
    switch (_toString(args[i])) {
      case typeObj.Array:
        if (isEmptyArray(args[i])) {
          return true
        }
        break
      case typeObj.Object:
        if (isEmptyObject(args[i])) {
          return true
        }
        break
      default:
        if (!args[i]) return true
    }
  }
  return false
}

export const isEmptyArray = (arr: any[]): boolean => {
  return arr.length === 0
}

export const isEmptyObject = (obj: Object): boolean => {
  return Object.keys(obj).length === 0
}

export const _toString = (arg: any): string => {
  return Object.prototype.toString.call(arg).slice(8, -1)
}

export const isObject = (arg: any): boolean => {
  return _toString(arg) === typeObj.Object
}
