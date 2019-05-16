import { query } from '../utils/jdbcUtils'
import { isEmpty } from '../utils/ObjectUtils'
import User from '../entity/User'

export default class UserDao {
  static async getUserById (id: bigint) {
    let result: any = await query('SELECT ID,USERNAME,GENDER,PHONE,HEADER,GMT_CREATE_TIME,GMT_UPDATE_TIME FROM users WHERE ID = ?', [id])
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
      user.header,
      user.gender,
      user.gmtCreateTime,
      user.gmtUpdateTime
    ]
    let result: any = await query('INSERT INTO users(USERNAME, PASSWORD, PHONE, HEADER, GENDER, GMT_CREATE_TIME, GMT_UPDATE_TIME) VALUES (?, ?, ?, ?, ?, ?, ?)', arr)

    return isEmpty(result) ? '' : result
  }
}
