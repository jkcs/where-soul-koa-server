import BaseEntity from './BaseEntity'
import User from './Users'
import BillTag from './BillTag'
import BillType from './BillType'
import { Component } from '../../core/decorator/ContainerDecorator'

@Component
export default class Bill extends BaseEntity {
  private _id: number
  private _user: User
  private _tag: BillTag
  private _type: BillType
  private _status: number
  private _money: bigint

  get id (): number {
    return this._id
  }

  set id (value: number) {
    this._id = value
  }

  get user (): User {
    return this._user
  }

  set user (value: User) {
    this._user = value
  }

  get tag (): BillTag {
    return this._tag
  }

  set tag (value: BillTag) {
    this._tag = value
  }

  get type (): BillType {
    return this._type
  }

  set type (value: BillType) {
    this._type = value
  }

  get status (): number {
    return this._status
  }

  set status (value: number) {
    this._status = value
  }

  get money (): bigint {
    return this._money
  }

  set money (value: bigint) {
    this._money = value
  }
}
