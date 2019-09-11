import { Controller, Get, RequestMapping } from '../../core/decorator/ControllerDecorator'
import UserService from '../service/UserService'
import { AutoWired } from '../../core/decorator/ContainerDecorator'

@Controller
@RequestMapping('user')
export default class UserController {
  @AutoWired
  private userService: UserService

  @Get('/:id')
  public getUser (ctx:any) {
    const { id } = ctx.params
    let user = this.userService.getUserById(id)

    ctx.body = {
      msg: user
    }
  }
}
