/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateContentDto {
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty({
    description: 'Nome do conteúdo',
    type: String,
    required: true,
    example: 'Razão e proporção',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Descrição do conteúdo',
    type: String,
    example:
      'Razão e proporção são utilizadas em situações que envolvem grandezas...',
    required: false,
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Status do conteúdo',
    type: Boolean,
    example: true,
    default: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;

  @ApiProperty({
    description: 'Id da disciplina',
    type: String,
    example: 'd5d7318e-442c-11ee-be56-0242ac120002',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  disciplineId: string;
}
