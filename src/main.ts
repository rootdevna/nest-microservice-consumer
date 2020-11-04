import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://avltcrcf:YL5TXofezoFyXFs5yPGPJO9h5ImeIrUJ@woodpecker.rmq.cloudamqp.com/avltcrcf',
      ],
      queue: 'user-messages',
      // false = manual acknowledgement; true = automatic acknowledgment
      noAck: false,
      // Get one by one
      prefetchCount: 1
    }
  });

  await app.listenAsync();
}
bootstrap();
