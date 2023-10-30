/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (E2E)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should check the service health', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Service is up and running!');
  });

  it(('should create a test user'), () => {
    const URL = '/user/create';
    return request(app.getHttpServer())
      .post(URL)
      .send({
        firstName: 'User',
        lastName: 'Teste',
        username: 'UserTeste',
        email: 'userteste@exemplo.com',
        password: 'UserTeste123!',
        isManager: false,
      })
      .expect(201);
  });

  it('should handle an unknown route', () => {
    return request(app.getHttpServer())
      .get('/unknownRoute')
      .expect(404);
  });
});
