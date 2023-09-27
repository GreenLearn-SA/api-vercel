/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsStrongPassword } from "class-validator";

export class SingInUserDto {
    @ApiProperty({ description: 'Apelido do usuário', type: String, example: 'PedrooSilvaa' })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ description: 'Senha do usuário', type: String, example: 'Pedro1234!' })
    @IsStrongPassword()
    @IsNotEmpty()
    password: string;
}