import UsersDao from '../dao/UserDao'
import User from '../entity/User'
import { AutoWired, Service } from '../../core/decorator/ContainerDecorator'
let moment = require('moment')

@Service
export default class UserService {
  @AutoWired
  private userDao: UsersDao

  getUserById (id: number) {
    return this.userDao.getUserById(id)
  }

  login (username: string, password: string) {
    return (this as any).userDao.getUserByUsernameAndPassword(username, password)
  }

  register (user: User) {
    // user.phone = user.username
    // user.gmtCreateTime = user.gmtUpdateTime = moment().format('YYYY-MM-DD HH:mm:ss')
    return (this as any).userDao.save(user)
  }
}
