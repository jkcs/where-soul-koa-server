import BaseEntity from './BaseEntity'

export default class BillTag extends BaseEntity {
  private _id: number;
  private _name: string;
  private _userId: number;

  get id (): number {
    return this._id
  }

  set id (value: number) {
    this._id = value
  }

  get name (): string {
    return this._name
  }

  set name (value: string) {
    this._name = value
  }

  get userId (): number {
    return this._userId
  }

  set userId (value: number) {
    this._userId = value
  }
}
