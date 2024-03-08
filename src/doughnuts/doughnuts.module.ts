import { Module } from '@nestjs/common';
import { DoughnutsService } from './doughnuts.service';
import { DoughnutsController } from './doughnuts.controller';
import { Transport,ClientsModule} from '@nestjs/microservices'
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DOUGHNUTS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'doughnuts',
            brokers: ['kafka:9092'],
          },
          consumer: {
            groupId: 'doughnuts-consumer'
          }
        }
      },
    ]),
  ],
  controllers: [DoughnutsController],
  providers: [DoughnutsService],
})
export class DoughnutsModule {}
