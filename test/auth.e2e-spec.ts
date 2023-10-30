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

  describe('Authentication', () => {
    it('/ (POST) - should return 404 when logging in a user that doesnt exists ', async () => {
      const URL = '/auth/login';
      const response = await request(app.getHttpServer())
        .post(URL)
        .send({
          username: 'user',
          password: 'User123!',
        })
        .expect(404);

      authToken = response.text;
    });

    it('/ (POST) - should return 400 when password is not strong enough ', async () => {
      const URL = '/auth/login';
      const response = await request(app.getHttpServer())
        .post(URL)
        .send({
          username: 'PedrooSilvaa',
          password: 'user123!',
        })
        .expect(400);

      authToken = response.text;
    });

    it('/ (POST) - should return 404 when user doesnt exists ', async () => {
      const URL = '/auth/login';
      const response = await request(app.getHttpServer())
        .post(URL)
        .send({
          username: 'user',
          password: 'user123!',
        })
        .expect(404);

      authToken = response.text;
    });

    it('/ (POST) - should return 401 when password is incorrect ', async () => {
      const URL = '/auth/login';
      const response = await request(app.getHttpServer())
        .post(URL)
        .send({
          username: 'PedrooSilvaa',
          password: 'User123!',
        })
        .expect(401);

      authToken = response.text;
    });

    it('/ (POST) - should log in into the user account', async () => {
      const URL = '/auth/login';
      const response = await request(app.getHttpServer())
        .post(URL)
        .send({
          username: 'PedrooSilvaa',
          password: 'Pedro1234!',
        })
        .expect(200);

      authToken = response.text;
    });

    it('/ (GET) - shoud access the current user profile', () => {
      const URL = '/auth/profile';
      return request(app.getHttpServer())
        .get(URL)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);
    });
  });
});
