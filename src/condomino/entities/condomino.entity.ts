import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Departamento } from '../../departamento/entities/departamento.entity';
import { Pago } from '../../pago/entities/pago.entity';

@Entity('condomino')
export class Condomino {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  Cedula_Condominio!: string;

  @Column()
  Nombre_Condomino!: string;

  @Column()
  Apellido_Condomino!: string;

  @Column()
  Celular_Condomino!: string;

  @Column()
  Telefono_Condomino!: string;

  @Column()
  Numero_Bloque!: string;

  @Column()
  Numero_departamento!: string;

  @ManyToOne(() => Departamento, (dep) => dep.condominos, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'departamento_id' })
  departamento?: Departamento;

  @OneToMany(() => Pago, (pago) => pago.condomino)
  pagos?: Pago[];
}