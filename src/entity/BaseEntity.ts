export default class BaseEntity {
  private _gmtCreateTime: (string)
  private _gmtUpdateTime: (string)

  get gmtCreateTime (): string {
    return this._gmtCreateTime
  }

  set gmtCreateTime (value: string) {
    this._gmtCreateTime = value
  }

  get gmtUpdateTime (): string {
    return this._gmtUpdateTime
  }

  set gmtUpdateTime (value: string) {
    this._gmtUpdateTime = value
  }
}
