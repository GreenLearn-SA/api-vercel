/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { HealthCheck } from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Server Health')
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Public()
  @Get()
  @HealthCheck()
  checkHealth() {
    return this.appService.checkHealth();
  }
}
