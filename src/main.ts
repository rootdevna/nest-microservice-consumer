import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://zicaldzw:pTK2IWIaXxIFwTubNoGxMWPeqe0UIOUI@toad.rmq.cloudamqp.com/zicaldzw',
      ],
      queue: 'rabbit-mq-nest-js',
      // false = manual acknowledgement; true = automatic acknowledgment
      noAck: false,
      // Get one by one
      prefetchCount: 1
    }
  });

  await app.listenAsync();
}
bootstrap();
