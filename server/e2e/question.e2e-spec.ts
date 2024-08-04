import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AuthGuard } from '../src/security/guards/auth.guard';
import { RolesGuard } from '../src/security/guards/roles.guard';
import { QuestionDTO } from '../src/service/dto/question.dto';
import { QuestionService } from '../src/service/question.service';

describe('Question Controller', () => {
    let app: INestApplication;

    const authGuardMock = { canActivate: (): any => true };
    const rolesGuardMock = { canActivate: (): any => true };
    const entityMock: any = {
        id: 'entityId',
    };

    const serviceMock = {
        findById: (): any => entityMock,
        findAndCount: (): any => [entityMock, 0],
        save: (): any => entityMock,
        update: (): any => entityMock,
        deleteById: (): any => entityMock,
    };

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        })
            .overrideGuard(AuthGuard)
            .useValue(authGuardMock)
            .overrideGuard(RolesGuard)
            .useValue(rolesGuardMock)
            .overrideProvider(QuestionService)
            .useValue(serviceMock)
            .compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/GET all questions ', async () => {
        const getEntities: QuestionDTO[] = (await request(app.getHttpServer()).get('/api/questions').expect(200)).body;

        expect(getEntities).toEqual(entityMock);
    });

    it('/GET questions by id', async () => {
        const getEntity: QuestionDTO = (
            await request(app.getHttpServer())
                .get('/api/questions/' + entityMock.id)
                .expect(200)
        ).body;

        expect(getEntity).toEqual(entityMock);
    });

    it('/POST create questions', async () => {
        const createdEntity: QuestionDTO = (
            await request(app.getHttpServer()).post('/api/questions').send(entityMock).expect(201)
        ).body;

        expect(createdEntity).toEqual(entityMock);
    });

    it('/PUT update questions', async () => {
        const updatedEntity: QuestionDTO = (
            await request(app.getHttpServer()).put('/api/questions').send(entityMock).expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/PUT update questions from id', async () => {
        const updatedEntity: QuestionDTO = (
            await request(app.getHttpServer())
                .put('/api/questions/' + entityMock.id)
                .send(entityMock)
                .expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/DELETE questions', async () => {
        const deletedEntity: QuestionDTO = (
            await request(app.getHttpServer())
                .delete('/api/questions/' + entityMock.id)
                .expect(204)
        ).body;

        expect(deletedEntity).toEqual({});
    });

    afterEach(async () => {
        await app.close();
    });
});
