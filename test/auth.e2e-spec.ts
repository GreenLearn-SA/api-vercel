/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AuthController (E2E)', () => {
  let app: INestApplication;
  let authToken: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('POST', () => {
    it('should return 404 when logging in a user that doesnt exists ', async () => {
      const URL = '/auth/login';
      await request(app.getHttpServer())
        .post(URL)
        .send({
          username: 'user',
          password: 'User123!',
        })
        .expect(404);
    });

    it('should return 401 when password is not strong enough ', async () => {
      const URL = '/auth/login';
      await request(app.getHttpServer())
        .post(URL)
        .send({
          username: 'UserTeste',
          password: 'user123!',
        })
        .expect(401);
    });

    it('should return 401 when password is incorrect ', async () => {
      const URL = '/auth/login';
      await request(app.getHttpServer())
        .post(URL)
        .send({
          username: 'UserTeste',
          password: 'User123!',
        })
        .expect(401);
    });

    it('should return 200 when logging into the user account', async () => {
      const URL = '/auth/login';
      const response = await request(app.getHttpServer())
        .post(URL)
        .send({
          username: 'UserTeste',
          password: 'UserTeste123!',
        })
        .expect(200);

      authToken = response.text;
    });
  });

  describe('GET', () => {
    it('shoud return 200 when accessing the current user profile', () => {
      const URL = '/auth/profile';
      return request(app.getHttpServer())
        .get(URL)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);
    });

    it('shoud return 401 when getting the user profile without access token', () => {
      const URL = '/auth/profile';
      return request(app.getHttpServer()).get(URL).expect(401);
    });
  });
});
