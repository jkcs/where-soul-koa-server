const YAML = require('yamljs')
const path = require('path')

export default class YamlParse {
  loadObj: any = null
  public static readonly _instance: YamlParse = new YamlParse()

  public static get Instance (): YamlParse {
    return YamlParse._instance
  }

  constructor () {
    this.loadObj = YAML.load(path.resolve(__dirname, '../../config/application.yaml'))
  }

  public getValue (name:string): any {
    const nameArr = name.split('.')
    return nameArr.reduce((v: any, currentValue:any, index: number) => {
      return index === 0 ? this.loadObj[currentValue] : v[currentValue]
    }, null)
  }
}
