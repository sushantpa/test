import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AuthGuard } from '../src/security/guards/auth.guard';
import { RolesGuard } from '../src/security/guards/roles.guard';
import { CandidateTestDTO } from '../src/service/dto/candidate-test.dto';
import { CandidateTestService } from '../src/service/candidate-test.service';

describe('CandidateTest Controller', () => {
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
            .overrideProvider(CandidateTestService)
            .useValue(serviceMock)
            .compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/GET all candidate-tests ', async () => {
        const getEntities: CandidateTestDTO[] = (
            await request(app.getHttpServer()).get('/api/candidate-tests').expect(200)
        ).body;

        expect(getEntities).toEqual(entityMock);
    });

    it('/GET candidate-tests by id', async () => {
        const getEntity: CandidateTestDTO = (
            await request(app.getHttpServer())
                .get('/api/candidate-tests/' + entityMock.id)
                .expect(200)
        ).body;

        expect(getEntity).toEqual(entityMock);
    });

    it('/POST create candidate-tests', async () => {
        const createdEntity: CandidateTestDTO = (
            await request(app.getHttpServer()).post('/api/candidate-tests').send(entityMock).expect(201)
        ).body;

        expect(createdEntity).toEqual(entityMock);
    });

    it('/PUT update candidate-tests', async () => {
        const updatedEntity: CandidateTestDTO = (
            await request(app.getHttpServer()).put('/api/candidate-tests').send(entityMock).expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/PUT update candidate-tests from id', async () => {
        const updatedEntity: CandidateTestDTO = (
            await request(app.getHttpServer())
                .put('/api/candidate-tests/' + entityMock.id)
                .send(entityMock)
                .expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/DELETE candidate-tests', async () => {
        const deletedEntity: CandidateTestDTO = (
            await request(app.getHttpServer())
                .delete('/api/candidate-tests/' + entityMock.id)
                .expect(204)
        ).body;

        expect(deletedEntity).toEqual({});
    });

    afterEach(async () => {
        await app.close();
    });
});
