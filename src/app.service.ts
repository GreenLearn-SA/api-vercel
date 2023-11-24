/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import { PrismaService } from './database/PrismaService';
import {
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
  HealthCheckResult,
  PrismaHealthIndicator,
} from '@nestjs/terminus';

@Injectable()
export class AppService {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator,
    private readonly prisma: PrismaHealthIndicator,
    private readonly prismaService: PrismaService,
  ) {}
  private readonly logger = new Logger('Server Health');

  @Cron(CronExpression.EVERY_10_MINUTES)
  async checkHealth() {
    try {
      const serverHealth: HealthCheckResult = await this.health.check([
        () => this.http.pingCheck('nestjs-api', 'http://localhost:3000/api'),
        () => this.db.pingCheck('database'),
        () => this.prisma.pingCheck('prisma', this.prismaService),
      ]);

      if (serverHealth.status === 'ok') {
        this.logger.log('All services are up and running! 🌱');
      }

      return serverHealth;
    } catch (error) {
      this.logger.error(`Error checking health: ${error.message}`);
      throw error;
    }
  }

  @Timeout(1000)
  runApplication() {
    return this.logger.log('Service is now up and running! 🌱');
  }
}