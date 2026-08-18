import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreatePagoDto {
  @IsNotEmpty()
  @IsString()
  Fecha_pago!: string;

  @IsNotEmpty()
  @IsString()
  Anio_Mes_pago!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  Valor_pago_alicuota!: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  Valor_pago_consumo_servicios!: number;

  @IsNotEmpty()
  @IsString()
  Cedula_Condominio!: string;

  @IsNotEmpty()
  @IsString()
  Numero_Bloque!: string;

  @IsNotEmpty()
  @IsString()
  Numero_departamento!: string;
}