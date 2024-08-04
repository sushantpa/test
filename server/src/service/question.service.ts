import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { QuestionDTO } from '../service/dto/question.dto';
import { QuestionMapper } from '../service/mapper/question.mapper';
import { QuestionRepository } from '../repository/question.repository';
import { Question } from '../domain/question.entity';

const relationshipNames = [];
relationshipNames.push('section');

@Injectable()
export class QuestionService {
    logger = new Logger('QuestionService');

    constructor(@InjectRepository(QuestionRepository) private questionRepository: QuestionRepository) {}

    async findById(id: string): Promise<QuestionDTO | undefined> {
        const options = { relations: relationshipNames };
        const result = await this.questionRepository.findOne(id, options);
        return QuestionMapper.fromEntityToDTO(result);
    }

    async findByfields(options: FindOneOptions<QuestionDTO>): Promise<QuestionDTO | undefined> {
        const result = await this.questionRepository.findOne(options);
        return QuestionMapper.fromEntityToDTO(result);
    }

    async findAndCount(options: FindManyOptions<QuestionDTO>): Promise<[Question[], number]> {
        options.relations = relationshipNames;
        const resultList = await this.questionRepository.findAndCount(options);
        return resultList;
    }

    async save(questionDTO: QuestionDTO): Promise<QuestionDTO | undefined> {
        const entity = QuestionMapper.fromDTOtoEntity(questionDTO);
        const result = await this.questionRepository.save(entity);
        return QuestionMapper.fromEntityToDTO(result);
    }

    async update(questionDTO: QuestionDTO): Promise<QuestionDTO | undefined> {
        const entity = QuestionMapper.fromDTOtoEntity(questionDTO);
        const result = await this.questionRepository.save(entity);
        return QuestionMapper.fromEntityToDTO(result);
    }

    async deleteById(id: string): Promise<void | undefined> {
        await this.questionRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }
}
