import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pago } from './entities/pago.entity';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';

@Injectable()
export class PagoService {
  constructor(
    @InjectRepository(Pago)
    private readonly repo: Repository<Pago>,
  ) {}

  create(dto: CreatePagoDto): Promise<Pago> {
    const p = this.repo.create(dto);
    return this.repo.save(p);
  }

  findAll(): Promise<Pago[]> {
    return this.repo.find({ relations: { condomino: true } });
  }

  async findOne(id: number): Promise<Pago> {
    const p = await this.repo.findOne({ where: { id }, relations: { condomino: true } });
    if (!p) throw new NotFoundException(`Pago #${id} no encontrado`);
    return p;
  }

  async update(id: number, dto: UpdatePagoDto): Promise<Pago> {
    const p = await this.findOne(id);
    this.repo.merge(p, dto);
    return this.repo.save(p);
  }

  async remove(id: number): Promise<void> {
    const p = await this.findOne(id);
    await this.repo.remove(p);
  }
}