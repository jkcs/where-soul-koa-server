import BaseEntity from './BaseEntity'

export default class User extends BaseEntity {
  private _id: number
  private _username: string
  private _password: string
  private _phone: string
  private _avatar: string
  private _gender: number

  get id (): number {
    return this._id
  }

  set id (value: number) {
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

  get avatar (): string {
    return this._avatar
  }

  set avatar (value: string) {
    this._avatar = value
  }

  get gender (): number {
    return this._gender
  }

  set gender (value: number) {
    this._gender = value
  }
}
