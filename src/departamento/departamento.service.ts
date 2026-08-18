import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamento } from './entities/departamento.entity';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private readonly repo: Repository<Departamento>,
  ) {}

  create(dto: CreateDepartamentoDto): Promise<Departamento> {
    const depto = this.repo.create(dto);
    return this.repo.save(depto);
  }

  findAll(): Promise<Departamento[]> {
    return this.repo.find({ relations: { bloque: true, condominos: true } });
  }

  async findOne(id: number): Promise<Departamento> {
    const d = await this.repo.findOne({ where: { id }, relations: { bloque: true, condominos: true } });
    if (!d) throw new NotFoundException(`Departamento #${id} no encontrado`);
    return d;
  }

  async update(id: number, dto: UpdateDepartamentoDto): Promise<Departamento> {
    const d = await this.findOne(id);
    this.repo.merge(d, dto);
    return this.repo.save(d);
  }

  async remove(id: number): Promise<void> {
    const d = await this.findOne(id);
    await this.repo.remove(d);
  }
}