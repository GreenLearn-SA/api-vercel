/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';

@Module({
  providers: [ContentService, PrismaService],
  exports: [ContentService],
  controllers: [ContentController],
})
export class ContentModule {}
