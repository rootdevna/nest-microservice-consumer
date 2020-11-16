import { Injectable } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @RabbitSubscribe({
    exchange: 'encaminhamento',
    routingKey: 'marilia.sexto.bsi',
    queue: 'empresa_A',
  })
  public async sendToEmpresaA(msg: {}) {
    console.log(`Empresa 1: ${JSON.stringify(msg)}`);
  }


  @RabbitSubscribe({
    exchange: 'encaminhamento',
    routingKey: 'marilia.*.*',
    queue: 'empresa_B',
  })
  public async sendToEmpresaB(msg: {}) {
    console.log(`Empresa 2: ${JSON.stringify(msg)}`);
  }

  @RabbitSubscribe({
    exchange: 'encaminhamento',
    routingKey: 'marilia.*.*',
    queue: 'empresa_C',
  })
  public async sendToEmpresaC(msg: {}) {
    console.log(`Empresa 2: ${JSON.stringify(msg)}`);
  }
}
