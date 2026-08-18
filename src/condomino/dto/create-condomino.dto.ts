import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateCondominoDto {
  @IsNotEmpty({ message: 'La cédula es obligatoria' })
  @IsString()
  @Matches(/^[0-9]{10}$/, { message: 'La cédula debe contener exactamente 10 dígitos numéricos' })
  Cedula_Condominio!: string;

  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString()
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, { message: 'El nombre solo puede contener letras' })
  Nombre_Condomino!: string;

  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  @IsString()
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, { message: 'El apellido solo puede contener letras' })
  Apellido_Condomino!: string;

  @IsNotEmpty({ message: 'El celular es obligatorio' })
  @IsString()
  @Matches(/^09[0-9]{8}$/, { message: 'El celular debe iniciar con 09 y tener 10 dígitos' })
  Celular_Condomino!: string;

  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  @IsString()
  @Matches(/^[0-9]{7,10}$/, { message: 'El teléfono debe tener entre 7 y 10 dígitos' })
  Telefono_Condomino!: string;

  @IsNotEmpty()
  @IsString()
  Numero_Bloque!: string;

  @IsNotEmpty()
  @IsString()
  Numero_departamento!: string;
}