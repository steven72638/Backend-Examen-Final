import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Departamento } from '../../departamento/entities/departamento.entity';

@Entity('bloque')
export class Bloque {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  Numero_Bloque!: string;

  @Column()
  Descripcion_Bloque!: string;

  @Column()
  Ubicacion!: string;

  @OneToMany(() => Departamento, (dep) => dep.bloque)
  departamentos?: Departamento[];
}