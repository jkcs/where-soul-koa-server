import BaseEntity from './BaseEntity'

export default class Users extends BaseEntity {
  private _id: number
  private _username: string
  private _password: string
  private _avatarId: number
  private _gender: number
  private _loginName: string
  private _usersSecurityId: string

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

  get avatarId (): number {
    return this._avatarId
  }

  set avatarId (value: number) {
    this._avatarId = value
  }

  get gender (): number {
    return this._gender
  }

  set gender (value: number) {
    this._gender = value
  }

  get loginName (): string {
    return this._loginName
  }

  set loginName (value: string) {
    this._loginName = value
  }

  get usersSecurityId (): string {
    return this._usersSecurityId
  }

  set usersSecurityId (value: string) {
    this._usersSecurityId = value
  }
}
