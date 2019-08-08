import UserDao from '../dao/UserDao'
import User from '../entity/User'
let moment = require('moment')

export default class UsersService {
  public static getUserById (id: bigint) {
    // return UserDao.getUserById(id)
  }

  public static login (username: string, password: string) {
    return UserDao.getUserByUsernameAndPassword(username, password)
  }

  public static register (user: User) {
    // user.phone = user.username
    // user.gmtCreateTime = user.gmtUpdateTime = moment().format('YYYY-MM-DD HH:mm:ss')
    return UserDao.save(user)
  }
}
