import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Condomino } from '../../condomino/entities/condomino.entity';

@Entity('pago')
export class Pago {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  Fecha_pago!: string;

  @Column()
  Anio_Mes_pago!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  Valor_pago_alicuota!: number;

  @Column('decimal', { precision: 10, scale: 2 })
  Valor_pago_consumo_servicios!: number;

  @Column()
  Cedula_Condominio!: string;

  @Column()
  Numero_Bloque!: string;

  @Column()
  Numero_departamento!: string;

  @ManyToOne(() => Condomino, (c) => c.pagos, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'condomino_id' })
  condomino?: Condomino;
}