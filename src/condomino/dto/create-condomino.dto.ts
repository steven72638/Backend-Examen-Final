import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCondominoDto {
  @IsNotEmpty()
  @IsString()
  @Length(10, 10)
  Cedula_Condominio!: string;

  @IsNotEmpty()
  @IsString()
  Nombre_Condomino!: string;

  @IsNotEmpty()
  @IsString()
  Apellido_Condomino!: string;

  @IsNotEmpty()
  @IsString()
  Celular_Condomino!: string;

  @IsNotEmpty()
  @IsString()
  Telefono_Condomino!: string;

  @IsNotEmpty()
  @IsString()
  Numero_Bloque!: string;

  @IsNotEmpty()
  @IsString()
  Numero_departamento!: string;
}