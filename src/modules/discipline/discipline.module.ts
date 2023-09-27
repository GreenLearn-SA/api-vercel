/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DisciplineService } from './discipline.service';
import { DisciplineController } from './discipline.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  providers: [DisciplineService, PrismaService],
  exports: [DisciplineService],
  controllers: [DisciplineController],
})
export class DisciplineModule { }
