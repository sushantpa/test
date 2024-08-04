import { EntityRepository, Repository } from 'typeorm';
import { CandidateAnswer } from '../domain/candidate-answer.entity';

@EntityRepository(CandidateAnswer)
export class CandidateAnswerRepository extends Repository<CandidateAnswer> {}
