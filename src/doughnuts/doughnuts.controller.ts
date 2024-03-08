import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoughnutsService } from './doughnuts.service';
import { CreateDoughnutDto } from './dto/create-doughnut.dto';
import { UpdateDoughnutDto } from './dto/update-doughnut.dto';

@Controller('doughnuts')
export class DoughnutsController {
  constructor(private readonly doughnutsService: DoughnutsService) {}

  @Post()
  create(@Body() createDoughnutDto: CreateDoughnutDto) {
    return this.doughnutsService.create(createDoughnutDto);
  }

  @Get()
  findAll() {
    return this.doughnutsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doughnutsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoughnutDto: UpdateDoughnutDto) {
    return this.doughnutsService.update(+id, updateDoughnutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doughnutsService.remove(+id);
  }
}
