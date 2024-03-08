import { Inject, Injectable } from '@nestjs/common';
import { CreateDoughnutDto } from './dto/create-doughnut.dto';
import { UpdateDoughnutDto } from './dto/update-doughnut.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class DoughnutsService {



  constructor(@Inject('DOUGHNUTS_SERVICE')private client: ClientKafka) {
    this.client.subscribeToResponseOf('doughnuts.get');
  }
  create(createDoughnutDto: CreateDoughnutDto) {
    
    return `This should created a doughnut`
  }

  findAll() {
    const event = {doughnuts: 'get'}
    return this.client.send(event, {  test:'1231' });
  }

  findOne(id: number) {
    return `This action returns a #${id} doughnut`;
  }

  update(id: number, updateDoughnutDto: UpdateDoughnutDto) {
    return `This action updates a #${id} doughnut`;
  }

  remove(id: number) {
    return `This action removes a #${id} doughnut`;
  }
}
