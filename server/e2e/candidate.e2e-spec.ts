import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AuthGuard } from '../src/security/guards/auth.guard';
import { RolesGuard } from '../src/security/guards/roles.guard';
import { CandidateDTO } from '../src/service/dto/candidate.dto';
import { CandidateService } from '../src/service/candidate.service';

describe('Candidate Controller', () => {
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
            .overrideProvider(CandidateService)
            .useValue(serviceMock)
            .compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/GET all candidates ', async () => {
        const getEntities: CandidateDTO[] = (await request(app.getHttpServer()).get('/api/candidates').expect(200))
            .body;

        expect(getEntities).toEqual(entityMock);
    });

    it('/GET candidates by id', async () => {
        const getEntity: CandidateDTO = (
            await request(app.getHttpServer())
                .get('/api/candidates/' + entityMock.id)
                .expect(200)
        ).body;

        expect(getEntity).toEqual(entityMock);
    });

    it('/POST create candidates', async () => {
        const createdEntity: CandidateDTO = (
            await request(app.getHttpServer()).post('/api/candidates').send(entityMock).expect(201)
        ).body;

        expect(createdEntity).toEqual(entityMock);
    });

    it('/PUT update candidates', async () => {
        const updatedEntity: CandidateDTO = (
            await request(app.getHttpServer()).put('/api/candidates').send(entityMock).expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/PUT update candidates from id', async () => {
        const updatedEntity: CandidateDTO = (
            await request(app.getHttpServer())
                .put('/api/candidates/' + entityMock.id)
                .send(entityMock)
                .expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/DELETE candidates', async () => {
        const deletedEntity: CandidateDTO = (
            await request(app.getHttpServer())
                .delete('/api/candidates/' + entityMock.id)
                .expect(204)
        ).body;

        expect(deletedEntity).toEqual({});
    });

    afterEach(async () => {
        await app.close();
    });
});
