/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { HealthCheck } from '@nestjs/terminus';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Server Health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @HealthCheck()
  @ApiOperation({
    summary: 'Verifica a saúde do servidor',
    description:
      'Verifica a saúde da API, do Prisma, do Banco de Dados e seu armazenamento e memória temporária',
  })
  @Get()
  checkHealth() {
    return this.appService.checkHealth();
  }
}
