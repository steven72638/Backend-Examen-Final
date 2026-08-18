import { Controller, Get, Post, Body } from '@nestjs/common';
import { CondominoService } from './condomino.service';
import { CreateCondominoDto } from './dto/create-condomino.dto';

@Controller('condomino')
export class CondominoController {
  constructor(private readonly service: CondominoService) {}

  @Post()
  create(@Body() dto: CreateCondominoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}