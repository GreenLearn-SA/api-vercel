/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDisciplineDto {
    @IsString()
    @IsOptional()
    id?: string;

    @ApiProperty({ description: 'Nome da matéria', type: String, example: 'Matemática' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'Id do usuário do hábito', type: String, example: 'd5d7318e-442c-11ee-be56-0242ac120002', required: true })
    @IsString()
    @IsNotEmpty()
    userId: string;
}