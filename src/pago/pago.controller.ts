import { Controller, Get, Post, Body } from '@nestjs/common';
import { PagoService } from './pago.service';
import { CreatePagoDto } from './dto/create-pago.dto';

@Controller('pago')
export class PagoController {
  constructor(private readonly service: PagoService) {}

  @Post()
  create(@Body() dto: CreatePagoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}