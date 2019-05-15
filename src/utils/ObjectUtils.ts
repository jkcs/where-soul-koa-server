const typeObj = {
  Array: 'Array',
  Object: 'Object'
}

export const isEmpty = (...args: any[]) => {
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

export const isEmptyArray = (arr: any[]) => {
  return arr.length === 0
}

export const isEmptyObject = (obj: Object) => {
  return Object.keys(obj).length === 0
}

export const _toString = (arg: any) => {
  return Object.prototype.toString.call(arg).slice(8, -1)
}
