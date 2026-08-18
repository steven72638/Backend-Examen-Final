import { IsNotEmpty, IsString, IsNumber, Min, Matches } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePagoDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  Fecha_pago!: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[0-2])$/, { message: 'El formato debe ser AAAA-MM' })
  Anio_Mes_pago!: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Min(0.01)
  Valor_pago_alicuota!: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  Valor_pago_consumo_servicios!: number;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[0-9]{10}$/)
  Cedula_Condominio!: string;

  @IsNotEmpty()
  @IsString()
  Numero_Bloque!: string;

  @IsNotEmpty()
  @IsString()
  Numero_departamento!: string;
}