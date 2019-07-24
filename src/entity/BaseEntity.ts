export default class BaseEntity {
  private _createTime: string;
  private _updateTime: string;

  get createTime (): string {
    return this._createTime
  }

  set createTime (value: string) {
    this._createTime = value
  }

  get updateTime (): string {
    return this._updateTime
  }

  set updateTime (value: string) {
    this._updateTime = value
  }
}
