import { Controller, Get, RequestMapping } from '../../core/decorator/ControllerDecorator'

@Controller
@RequestMapping('/test')
export default class TestController {
  @Get('/test')
  public getSome (ctx:any) {
    console.log(12313)
  }
}
