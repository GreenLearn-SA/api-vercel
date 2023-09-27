/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';
import { DisciplineModule } from './modules/discipline/discipline.module';

@Module({
  imports: [AuthModule, UserModule, DisciplineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
