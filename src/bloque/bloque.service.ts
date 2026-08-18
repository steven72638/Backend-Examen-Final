import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bloque } from './entities/bloque.entity';
import { CreateBloqueDto } from './dto/create-bloque.dto';
import { UpdateBloqueDto } from './dto/update-bloque.dto';

@Injectable()
export class BloqueService {
  constructor(
    @InjectRepository(Bloque)
    private readonly repo: Repository<Bloque>,
  ) {}

  create(dto: CreateBloqueDto): Promise<Bloque> {
    const bloque = this.repo.create(dto);
    return this.repo.save(bloque);
  }

  findAll(): Promise<Bloque[]> {
    return this.repo.find({ relations: { departamentos: true } });
  }

  async findOne(id: number): Promise<Bloque> {
    const b = await this.repo.findOne({ where: { id }, relations: { departamentos: true } });
    if (!b) throw new NotFoundException(`Bloque #${id} no encontrado`);
    return b;
  }

  async update(id: number, dto: UpdateBloqueDto): Promise<Bloque> {
    const b = await this.findOne(id);
    this.repo.merge(b, dto);
    return this.repo.save(b);
  }

  async remove(id: number): Promise<void> {
    const b = await this.findOne(id);
    await this.repo.remove(b);
  }
}