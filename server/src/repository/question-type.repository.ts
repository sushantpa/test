import { EntityRepository, Repository } from 'typeorm';
import { QuestionType } from '../domain/question-type.entity';

@EntityRepository(QuestionType)
export class QuestionTypeRepository extends Repository<QuestionType> {

    async getRandom(): Promise<QuestionType> {
        const questionTypes = await this.find()
        const questionType = await questionTypes[Math.floor(Math.random() * questionTypes.length)];
        return questionType;
    }
}