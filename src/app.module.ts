import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloqueModule } from './bloque/bloque.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { CondominoModule } from './condomino/condomino.module';
import { PagoModule } from './pago/pago.module';
import { Bloque } from './bloque/entities/bloque.entity';
import { Departamento } from './departamento/entities/departamento.entity';
import { Condomino } from './condomino/entities/condomino.entity';
import { Pago } from './pago/entities/pago.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres.uqlnkzgopkxghnlofelj:Admin2026SecurePass@aws-0-us-west-2.pooler.supabase.com:5432/postgres',
      entities: [Bloque, Departamento, Condomino, Pago],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    BloqueModule,
    DepartamentoModule,
    CondominoModule,
    PagoModule,
  ],
})
export class AppModule {}