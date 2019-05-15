import BaseEntity from './BaseEntity'

export default class User extends BaseEntity {
  constructor ({ id, username, password, phone, header, gender }:any = {}) {
    super()
    this._id = id
    this._username = username
    this._password = password
    this._phone = phone
    this._header = header
    this._gender = gender
  }

  private _id: bigint
  private _username: string
  private _password: string
  private _phone: string
  private _header: string
  private _gender: string

  get id (): bigint {
    return this._id
  }

  set id (value: bigint) {
    this._id = value
  }

  get username (): string {
    return this._username
  }

  set username (value: string) {
    this._username = value
  }

  get password (): string {
    return this._password
  }

  set password (value: string) {
    this._password = value
  }

  get phone (): string {
    return this._phone
  }

  set phone (value: string) {
    this._phone = value
  }

  get header (): string {
    return this._header
  }

  set header (value: string) {
    this._header = value
  }

  get gender (): string {
    return this._gender
  }

  set gender (value: string) {
    this._gender = value
  }
}
