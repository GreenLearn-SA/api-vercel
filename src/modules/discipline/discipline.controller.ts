/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { DisciplineService } from './discipline.service';
import { ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiCreatedResponse, ApiOperation,  ApiTags } from '@nestjs/swagger';
import { SwaggerBadRequestResponse } from '../helpers/bad-request-response';
import { SwaggerConflictResponse } from '../helpers/conflict-response';
import { CreateDisciplineDto } from './dto/create-discipline.dto';

@ApiBearerAuth()
@ApiTags('Disciplina')
@Controller('discipline')
export class DisciplineController {
  constructor(private readonly disciplineService: DisciplineService) { }

  @Post('create')
  @ApiOperation({
    summary: 'Cria uma disciplina',
    description: 'Cria uma disciplina na plataforma',
  })
  @ApiCreatedResponse({ status: 201, description: 'Disciplina criada' })
  @ApiConflictResponse({
    status: 409,
    description: 'Disciplina com mesmo nome já existe',
    type: SwaggerConflictResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  create(@Body() createDisciplineDto: CreateDisciplineDto) {
    return this.disciplineService.create(createDisciplineDto);
  }
}