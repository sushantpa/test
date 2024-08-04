import { EntityRepository, Repository } from 'typeorm';
import { CandidateTest } from '../domain/candidate-test.entity';

@EntityRepository(CandidateTest)
export class CandidateTestRepository extends Repository<CandidateTest> {}
