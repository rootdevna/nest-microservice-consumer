import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { RabbitMQModule as RMQ} from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RMQ.forRoot(RMQ, {
      uri: 'amqps://avltcrcf:YL5TXofezoFyXFs5yPGPJO9h5ImeIrUJ@woodpecker.rmq.cloudamqp.com/avltcrcf',        
      connectionInitOptions: { wait: false }
    }),
    AppModule,
    MongooseModule.forRoot('mongodb+srv://rootdevna:RG2eolct6cRAa6Ve@cluster0.zihhk.mongodb.net/users?retryWrites=true&w=majority'),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
