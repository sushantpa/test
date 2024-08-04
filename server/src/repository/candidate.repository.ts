import { EntityRepository, Repository } from 'typeorm';
import { Candidate } from '../domain/candidate.entity';

@EntityRepository(Candidate)
export class CandidateRepository extends Repository<Candidate> {}
