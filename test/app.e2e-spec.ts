import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('E2E engagement system API', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/votes (GET) empty result', () => {
    return request(app.getHttpServer())
      .get('/votes')
      .expect(200)
      .expect([]);
  });

  it('/votes (POST)', () => {
    return request(app.getHttpServer())
      .post('/votes',)
      .send({})
      .set('Content-Type', 'application/json')
      .expect(201)
      .expect("")
  })

  it('/votes/:id (GET) non-existent vote', () => {
    return request(app.getHttpServer())
      .get('/votes/1')
      .expect(404)
      .expect({statusCode: 404, message: 'Not found'});
  });

  it('/votes/:id (GET) non-numeric ID', () => {
    return request(app.getHttpServer())
      .get('/votes/abc')
      .expect(400);
  });

  it('/votes/:id (PATCH) non-existent vote', () => {
    return request(app.getHttpServer())
      .patch('/votes/1')
      .send({})
      .expect(404);
  })

  it('/votes/:id (DELETE) non-existent vote', () => {
    return request(app.getHttpServer())
      .delete('/votes/1')
      .send({})
      .expect(404);
  })
});
