import BaseEntity from './BaseEntity'

export default class BillType extends BaseEntity {
  private _id: number
  private _parentId: number

  get id (): number {
    return this._id
  }

  set id (value: number) {
    this._id = value
  }

  get parentId (): number {
    return this._parentId
  }

  set parentId (value: number) {
    this._parentId = value
  }
}
