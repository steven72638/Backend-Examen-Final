import { PartialType } from '@nestjs/mapped-types';
import { CreateCondominoDto } from './create-condomino.dto';

export class UpdateCondominoDto extends PartialType(CreateCondominoDto) {}
