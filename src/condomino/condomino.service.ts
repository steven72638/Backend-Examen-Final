import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Condomino } from './entities/condomino.entity';
import { CreateCondominoDto } from './dto/create-condomino.dto';
import { UpdateCondominoDto } from './dto/update-condomino.dto';

@Injectable()
export class CondominoService {
  constructor(
    @InjectRepository(Condomino)
    private readonly repo: Repository<Condomino>,
  ) {}

  create(dto: CreateCondominoDto): Promise<Condomino> {
    const c = this.repo.create(dto);
    return this.repo.save(c);
  }

  findAll(): Promise<Condomino[]> {
    return this.repo.find({ relations: { departamento: true, pagos: true } });
  }

  async findOne(id: number): Promise<Condomino> {
    const c = await this.repo.findOne({ where: { id }, relations: { departamento: true, pagos: true } });
    if (!c) throw new NotFoundException(`Condómino #${id} no encontrado`);
    return c;
  }

  async update(id: number, dto: UpdateCondominoDto): Promise<Condomino> {
    const c = await this.findOne(id);
    this.repo.merge(c, dto);
    return this.repo.save(c);
  }

  async remove(id: number): Promise<void> {
    const c = await this.findOne(id);
    await this.repo.remove(c);
  }
}