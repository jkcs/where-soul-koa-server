import { Controller, Get, Post, RequestMapping } from '../../core/decorator/ControllerDecorator'

@Controller
@RequestMapping('')
export default class TestController {
  @Get('/get')
  public getSome (ctx:any) {
    console.log(12313)
    ctx.body = {
      msg: '测试'
    }
  }

  @Post('/post')
  public postSome (ctx:any) {
    console.log(12313)
    ctx.body = {
      msg: '测试'
    }
  }
}
