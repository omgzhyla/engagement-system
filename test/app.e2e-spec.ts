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

  it('/votes (GET)', () => {
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
});
