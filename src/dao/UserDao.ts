import { isEmpty } from '../utils/ObjectUtils'
import Users from '../entity/Users'
import { AutoWired, Component } from '../../core/decorator/ContainerDecorator'
import JDBCActuator from '../utils/JDBCActuator'

@Component
export default class UserDao {
  @AutoWired
  private jdbcActuator: JDBCActuator

  async getUserById (id: number) {
    let result: any = await (this as any).jdbcActuator.query(
      'SELECT ID,USERNAME,GENDER,PHONE,AVATAR_ID,CREATE_TIME,UPDATE_TIME FROM users WHERE ID = ?', [id]
    )
    return isEmpty(result) ? null : result[0]
  }

  // async getUserByUsernameAndPassword (username: string, password: string) {
  //   let result: any = await (this as any).jdbcActuator.query('SELECT ID FROM users WHERE USERNAME = ? AND PASSWORD = ?', [username, password])
  //   return isEmpty(result) ? null : result[0]
  // }

  // async save (user: User) {
  //   const arr = [
  //     user.username,
  //     user.password,
  //     user.phone,
  //     user.avatar,
  //     user.gender,
  //     user.createTime,
  //     user.updateTime
  //   ]
  //   let result: any = await (this as any).jdbcActuator.query('INSERT INTO users(USERNAME, PASSWORD, PHONE, AVATAR_ID, GENDER, CREATE_TIME, UPDATE_TIME) VALUES (?, ?, ?, ?, ?, ?, ?)', arr)
  //
  //   return isEmpty(result) ? '' : result
  // }
}
