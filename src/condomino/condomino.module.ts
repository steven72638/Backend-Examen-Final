import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CondominoService } from './condomino.service';
import { CondominoController } from './condomino.controller';
import { Condomino } from './entities/condomino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Condomino])],
  controllers: [CondominoController],
  providers: [CondominoService],
})
export class CondominoModule {}