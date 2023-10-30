/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
let authToken: string;

describe('UserController (E2E)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

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

  describe('POST', () => {
    it('should return 201 when creating a user', async () => {
      const URL = '/user/create';
      await request(app.getHttpServer())
        .post(URL)
        .send({
          firstName: 'Pedro',
          lastName: 'Silva',
          username: 'PedrooSilvaa',
          email: 'pedrosilva@exemplo.com',
          password: 'Pedro1234!',
          isManager: false,
        })
        .expect(201);
    });

    it('should return 409 when the user email has already been signed', () => {
      const URL = '/user/create';
      return request(app.getHttpServer())
        .post(URL)
        .send({
          firstName: 'Pedro',
          lastName: 'Silva',
          username: 'PedrooSilvaa',
          email: 'userteste@exemplo.com',
          password: 'Pedro1234!',
          isManager: false,
        })
        .expect(409);
    });

    it('should return 409 when the user username has already been signed', () => {
      const URL = '/user/create';
      return request(app.getHttpServer())
        .post(URL)
        .send({
          firstName: 'Pedro',
          lastName: 'Silva',
          username: 'UserTeste',
          email: 'pedrosilva@exemplo.com',
          password: 'Pedro1234!',
          isManager: false,
        })
        .expect(409);
    });
  });

  describe('GET', () => {
    it('should return 401 when listing the users without accessToken', () => {
      const URL = '/user/findAll/1';
      return request(app.getHttpServer()).get(URL).expect(401);
    });

    it('should return 200 when listing the users', () => {
      const URL = '/user/findAll/1';
      return request(app.getHttpServer())
        .get(URL)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);
    });

    it('should return 401 when listing a specific user without accessToken', () => {
      const URL = '/user/UserTeste';
      return request(app.getHttpServer()).get(URL).expect(401);
    });

    it('should return 200 when listing a specific user', () => {
      const URL = '/user/UserTeste';
      return request(app.getHttpServer())
        .get(URL)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);
    });
  });

  describe('PATCH', () => {
    it('should return 401 when updating a user without accessToken', () => {
      const URL = '/user/update/PedrooSilvaa';
      return request(app.getHttpServer()).patch(URL).expect(401);
    });

    it('should return 404 when updating a user that doesnt exists', () => {
      const URL = '/user/update/unknownUser';
      return request(app.getHttpServer())
        .patch(URL)
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          firstName: 'Pedro',
          lastName: 'Silva',
          username: 'UserTeste',
          email: 'pedrosilva@exemplo.com',
          password: 'Pedro1234!',
          isManager: false,
        })
        .expect(404);
    });

    it('should return 409 when updating to a username that already exists', () => {
      const URL = '/user/update/PedrooSilvaa';
      return request(app.getHttpServer())
        .patch(URL)
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          firstName: 'Pedro',
          lastName: 'Silva',
          username: 'UserTeste',
          email: 'pedrosilva@exemplo.com',
          password: 'Pedro1234!',
          isManager: false,
        })
        .expect(409);
    });

    it('should return 200 when updating a user ', () => {
      const URL = '/user/update/PedrooSilvaa';
      return request(app.getHttpServer())
        .patch(URL)
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          firstName: 'Pedro',
          lastName: 'Silva',
          username: 'UserTeste',
          email: 'pedrosilva@exemplo.com',
          password: 'Pedro1234!',
          isManager: true,
        })
        .expect(200);
    });
  });
  
  describe('DELETE', () => {
    it('should return 401 when deleting a user without accessToken', () => {
      const URL = '/user/remove/PedrooSilvaa';
      return request(app.getHttpServer()).delete(URL).expect(401);
    });

    it('should return 404 when deleting a user that doesnt exists', () => {
      const URL = '/user/remove/unknownUser';
      return request(app.getHttpServer())
        .delete(URL)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });

    it('should return 200 when deleting a user', () => {
        const URL = '/user/remove/PedrooSilvaa';
        return request(app.getHttpServer())
          .delete(URL)
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);
      });
  });
});
