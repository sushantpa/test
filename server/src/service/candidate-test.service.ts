import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, getManager } from 'typeorm';
import { CandidateTestDTO } from '../service/dto/candidate-test.dto';
import { CandidateTestMapper } from '../service/mapper/candidate-test.mapper';
import { CandidateTestRepository } from '../repository/candidate-test.repository';
import { CandidateTest } from '../domain/candidate-test.entity';
import { CandidateAnswerDTO } from './dto/candidate-answer.dto';
import { CandidateAnswerRepository } from '../repository/candidate-answer.repository';
import { CandidateAnswer } from '../domain/candidate-answer.entity';
import { getConnection } from "typeorm";
import moment from 'moment';

const relationshipNames = ['candidate', 'candidateAnswers'];
relationshipNames.push('candidate');

@Injectable()
export class CandidateTestService {
    logger = new Logger('CandidateTestService');

    constructor(
        @InjectRepository(CandidateTestRepository) private candidateTestRepository: CandidateTestRepository,
        @InjectRepository(CandidateTestRepository) private candidateAnswerRepository: CandidateAnswerRepository
    ) { }

    async findById(id: string): Promise<CandidateTest | undefined> {
        // const options = { relations: relationshipNames };
        const result = await this.candidateTestRepository.findOne(id);
        return result;
    }

    async findByfields(options: FindOneOptions<CandidateTestDTO>): Promise<CandidateTestDTO | undefined> {
        const result = await this.candidateTestRepository.findOne(options);
        return CandidateTestMapper.fromEntityToDTO(result);
    }

    async findAndCount(options: FindManyOptions<CandidateTestDTO>): Promise<[CandidateTest[], number]> {
        options.relations = relationshipNames;
        const resultList = await this.candidateTestRepository.findAndCount(options);
        return resultList;
    }

    async save(candidateTestDTO: CandidateTestDTO): Promise<CandidateTestDTO | undefined> {
        const entity = CandidateTestMapper.fromDTOtoEntity(candidateTestDTO);
        const result = await this.candidateTestRepository.save(entity);
        return CandidateTestMapper.fromEntityToDTO(result);
    }

    async update(candidateTestDTO: CandidateTestDTO): Promise<CandidateTestDTO | undefined> {
        const entity = CandidateTestMapper.fromDTOtoEntity(candidateTestDTO);
        const result = await this.candidateTestRepository.save(entity);
        return CandidateTestMapper.fromEntityToDTO(result);
    }

    async deleteById(id: string): Promise<void | undefined> {
        await this.candidateTestRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }

    async updateCandidateTest(id: string, update) {
        const candidateTest = await this.candidateTestRepository.update(id, update)
        return candidateTest
    }

     async submitAnswers(updateAnswer: CandidateAnswerDTO[]) {
      const submitAnswer = await getConnection()
                 .createQueryBuilder()
                 .insert()
                 .into(CandidateAnswer)
                 .values(updateAnswer)
                 .execute();
        return submitAnswer;
    }

     async recordScore(candidateTestId) {
         const entityManager = await getManager();
         const score = entityManager.query('SELECT questionId FROM candidate_answer INNER JOIN question ON candidate_answer.questionId = question.id AND candidate_answer.answer = question.answer WHERE candidate_answer.candidateTestId = ?', [candidateTestId])
        return score;
    }


    async submit(candidateTestId, answers): Promise<CandidateTestDTO> {
        if(answers.length > 23){
            throw new HttpException("Invalid Submission", HttpStatus.BAD_REQUEST);
        }
        const candidateTest = await this.candidateTestRepository.findOne(candidateTestId);
        await this.submitAnswers(answers)
        const score = await this.recordScore(candidateTestId)
        candidateTest.questionsAttempted = answers.length
        candidateTest.testCompletionDate = moment().toDate();
        candidateTest.testScore = score.length;
        candidateTest.testCompleted = true
        candidateTest.active = false;
        await this.candidateTestRepository.update(candidateTest.id, candidateTest);
        return CandidateTestMapper.fromEntityToDTO(candidateTest);
    }
}
