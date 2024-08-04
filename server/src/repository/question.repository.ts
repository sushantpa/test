import { EntityRepository, Repository } from 'typeorm';
import { Question } from '../domain/question.entity';

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {}
