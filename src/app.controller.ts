import { Controller } from '@nestjs/common';
import { MessagePattern, RmqContext, Ctx, Payload,} from '@nestjs/microservices';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService) {
   
  }

  @MessagePattern('rabbit-mq-producer')
  public async execute(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();
    const result = await this.userService.login(data.username, data.password)
    console.log('result', result);
    channel.ack(orginalMessage);
  }
}
