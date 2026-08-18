import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Bloque } from '../../bloque/entities/bloque.entity';
import { Condomino } from '../../condomino/entities/condomino.entity';

@Entity('departamento')
export class Departamento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  Numero_departamento!: string;

  @Column()
  Descripcion_departamento!: string;

  @Column()
  Numero_Bloque!: string;

  @ManyToOne(() => Bloque, (b) => b.departamentos, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'bloque_id' })
  bloque?: Bloque;

  @OneToMany(() => Condomino, (c) => c.departamento)
  condominos?: Condomino[];
}