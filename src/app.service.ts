import { Injectable, Logger } from '@nestjs/common';
import { Cron, Timeout } from '@nestjs/schedule';
import {
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
  HealthCheckResult,
} from '@nestjs/terminus';

@Injectable()
export class AppService {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator,
  ) {}
  private readonly logger = new Logger(AppService.name);

  @Cron('10 * * * *')
  async checkHealth() {
    try {
      const serverHealth: HealthCheckResult = await this.health.check([
        () => this.http.pingCheck('nestjs-api', 'http://localhost:4000/api'),
        () => this.db.pingCheck('database'),
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

  @Timeout(3000)
  runApplication() {
    return this.logger.log('Service is now up and running! 🌱');
  }
}
