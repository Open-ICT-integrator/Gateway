import { PartialType } from '@nestjs/swagger';
import { CreateDoughnutDto } from './create-doughnut.dto';

export class UpdateDoughnutDto extends PartialType(CreateDoughnutDto) {}
