/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DisciplineService } from './discipline.service';
import { ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation,  ApiParam,  ApiTags } from '@nestjs/swagger';
import { SwaggerBadRequestResponse } from '../helpers/bad-request-response';
import { SwaggerConflictResponse } from '../helpers/conflict-response';
import { CreateDisciplineDto } from './dto/create-discipline.dto';
import { SwaggerNotFoundResponse } from '../helpers/not-found-response';
import { UpdateDisciplineDto } from './dto/update-discipline.dto';

@ApiBearerAuth()
@ApiTags('Disciplina')
@Controller('discipline')
export class DisciplineController {
  constructor(private readonly disciplineService: DisciplineService) { }

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
  @Post('create')
  create(@Body() createDisciplineDto: CreateDisciplineDto) {
    return this.disciplineService.create(createDisciplineDto);
  }

  @ApiOperation({
    summary: 'Lista todas as disciplinas',
    description: 'Lista todas as disciplinas por página',
  })
  @ApiParam({ name: 'page', description: 'Página de listagem das disciplinas', schema: { default: 1 } })
  @ApiOkResponse({ status: 200, description: 'Disciplinas listadas' })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Get('findAll/:page')
  findAll(@Param('page') page: number) {
    return this.disciplineService.findAll(page);
  }

  @ApiOperation({
    summary: 'Lista uma disciplina específica',
    description:
      'Lista as informações de uma disciplina específica com base no nome',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Informações da disciplina listadas',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Disciplina não encontrada',
    type: SwaggerNotFoundResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Get('/:name')
  findOne(@Param('name') name: string) {
    return this.disciplineService.findOne(name);
  }

  @ApiOperation({
    summary: 'Atualiza as informações de uma disciplina',
    description: 'Atualiza as informações do perfil da disciplina com base no nome',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Informações da disciplina atualizadas',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Disciplina não encontrada',
    type: SwaggerNotFoundResponse,
  })
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
  @Patch('update/:name')
  update(@Param('name') name: string, @Body() updateDisciplineDto: UpdateDisciplineDto) {
    return this.disciplineService.update(name, updateDisciplineDto);
  }

  @ApiOperation({
    summary: 'Remove uma disciplina',
    description:
      'Remove uma disciplina do sistema ao passar o nome da mesma',
  })
  @ApiOkResponse({ status: 200, description: 'Disciplina removida' })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Disciplina não encontrada',
    type: SwaggerNotFoundResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Delete('remove/:name')
  remove(@Param('name') name: string) {
    return this.disciplineService.remove(name);
  }
}