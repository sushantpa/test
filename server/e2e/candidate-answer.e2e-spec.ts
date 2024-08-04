import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AuthGuard } from '../src/security/guards/auth.guard';
import { RolesGuard } from '../src/security/guards/roles.guard';
import { CandidateAnswerDTO } from '../src/service/dto/candidate-answer.dto';
import { CandidateAnswerService } from '../src/service/candidate-answer.service';

describe('CandidateAnswer Controller', () => {
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
            .overrideProvider(CandidateAnswerService)
            .useValue(serviceMock)
            .compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/GET all candidate-answers ', async () => {
        const getEntities: CandidateAnswerDTO[] = (
            await request(app.getHttpServer()).get('/api/candidate-answers').expect(200)
        ).body;

        expect(getEntities).toEqual(entityMock);
    });

    it('/GET candidate-answers by id', async () => {
        const getEntity: CandidateAnswerDTO = (
            await request(app.getHttpServer())
                .get('/api/candidate-answers/' + entityMock.id)
                .expect(200)
        ).body;

        expect(getEntity).toEqual(entityMock);
    });

    it('/POST create candidate-answers', async () => {
        const createdEntity: CandidateAnswerDTO = (
            await request(app.getHttpServer()).post('/api/candidate-answers').send(entityMock).expect(201)
        ).body;

        expect(createdEntity).toEqual(entityMock);
    });

    it('/PUT update candidate-answers', async () => {
        const updatedEntity: CandidateAnswerDTO = (
            await request(app.getHttpServer()).put('/api/candidate-answers').send(entityMock).expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/PUT update candidate-answers from id', async () => {
        const updatedEntity: CandidateAnswerDTO = (
            await request(app.getHttpServer())
                .put('/api/candidate-answers/' + entityMock.id)
                .send(entityMock)
                .expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/DELETE candidate-answers', async () => {
        const deletedEntity: CandidateAnswerDTO = (
            await request(app.getHttpServer())
                .delete('/api/candidate-answers/' + entityMock.id)
                .expect(204)
        ).body;

        expect(deletedEntity).toEqual({});
    });

    afterEach(async () => {
        await app.close();
    });
});
