import { Controller, Get, Post, Body } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';

@Controller('departamento')
export class DepartamentoController {
  constructor(private readonly service: DepartamentoService) {}

  @Post()
  create(@Body() dto: CreateDepartamentoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}