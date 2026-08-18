import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBloqueDto {
  @IsNotEmpty()
  @IsString()
  Numero_Bloque!: string;

  @IsNotEmpty()
  @IsString()
  Descripcion_Bloque!: string;

  @IsNotEmpty()
  @IsString()
  Ubicacion!: string;
}