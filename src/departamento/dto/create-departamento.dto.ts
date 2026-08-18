import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDepartamentoDto {
  @IsNotEmpty()
  @IsString()
  Numero_departamento!: string;

  @IsNotEmpty()
  @IsString()
  Descripcion_departamento!: string;

  @IsNotEmpty()
  @IsString()
  Numero_Bloque!: string;
}