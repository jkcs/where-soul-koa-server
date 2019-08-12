import query from '../utils/jdbcUtils'
import { isEmpty } from '../utils/ObjectUtils'
import User from '../entity/User'
import { Component } from '../../core/decorator/ContainerDecorator'

@Component
export default class UserDao {
  static async getUserById (id: number) {
    let result: any = await query('SELECT ID,USERNAME,GENDER,PHONE,AVATAR_ID,CREATE_TIME,UPDATE_TIME FROM users WHERE ID = ?', [id])
    return isEmpty(result) ? '' : result[0]
  }

  static async getUserByUsernameAndPassword (username: string, password: string) {
    let result: any = await query('SELECT ID FROM users WHERE USERNAME = ? AND PASSWORD = ?', [username, password])
    return isEmpty(result) ? '' : result[0]
  }

  static async save (user: User) {
    const arr = [
      user.username,
      user.password,
      user.phone,
      user.avatar,
      user.gender,
      user.createTime,
      user.updateTime
    ]
    let result: any = await query('INSERT INTO users(USERNAME, PASSWORD, PHONE, AVATAR_ID, GENDER, CREATE_TIME, UPDATE_TIME) VALUES (?, ?, ?, ?, ?, ?, ?)', arr)

    return isEmpty(result) ? '' : result
  }
}
