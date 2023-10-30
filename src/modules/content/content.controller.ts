/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContentService } from './content.service';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { SwaggerBadRequestResponse } from '../helpers/bad-request-response';
import { SwaggerConflictResponse } from '../helpers/conflict-response';
import { SwaggerNotFoundResponse } from '../helpers/not-found-response';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@ApiBearerAuth()
@ApiTags('Conteúdo')
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @ApiOperation({
    summary: 'Cria um conteúdo',
    description: 'Cria um conteúdo na plataforma',
  })
  @ApiCreatedResponse({ status: 201, description: 'Conteúdo criado' })
  @ApiConflictResponse({
    status: 409,
    description: 'Conteúdo com mesmo nome já existe',
    type: SwaggerConflictResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Post('create')
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentService.create(createContentDto);
  }

  @ApiOperation({
    summary: 'Lista todos os conteúdos',
    description: 'Lista todos os conteúdos por página',
  })
  @ApiParam({
    name: 'page',
    description: 'Página de listagem dos conteúdos',
    schema: { default: 1 },
  })
  @ApiOkResponse({ status: 200, description: 'Conteúdos listados' })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Get('findAll/:page')
  findAll(@Param('page') page: number) {
    return this.contentService.findAll(page);
  }

  @ApiOperation({
    summary: 'Lista um conteúdo específico',
    description:
      'Lista as informações de um conteúdo específico com base no nome',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Informações do conteúdo listadas',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Conteúdo não encontrado',
    type: SwaggerNotFoundResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Get('/:name')
  findOne(@Param('name') name: string) {
    return this.contentService.findOne(name);
  }

  @ApiOperation({
    summary: 'Atualiza as informações de um Conteúdo',
    description:
      'Atualiza as informações do perfil do conteúdo com base no nome',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Informações do conteúdo atualizadas',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Conteúdo não encontrado',
    type: SwaggerNotFoundResponse,
  })
  @ApiConflictResponse({
    status: 409,
    description: 'Conteúdo com mesmo nome já existe',
    type: SwaggerConflictResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Patch('update/:name')
  update(
    @Param('name') name: string,
    @Body() updateContentDto: UpdateContentDto,
  ) {
    return this.contentService.update(name, updateContentDto);
  }

  @ApiOperation({
    summary: 'Remove um conteúdo',
    description: 'Remove um conteúdo do sistema ao passar o nome do mesma',
  })
  @ApiOkResponse({ status: 200, description: 'Conteúdo removido' })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Conteúdo não encontrado',
    type: SwaggerNotFoundResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Delete('remove/:name')
  remove(@Param('name') name: string) {
    return this.contentService.remove(name);
  }
}
