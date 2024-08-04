import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { QuestionTypeDTO } from '../service/dto/question-type.dto';
import { QuestionTypeMapper } from '../service/mapper/question-type.mapper';
import { QuestionTypeRepository } from '../repository/question-type.repository';
import { QuestionType } from 'src/domain/question-type.entity';

const relationshipNames = ["sections", "sections.questions"];

@Injectable()
export class QuestionTypeService {
    logger = new Logger('QuestionTypeService');

    constructor(@InjectRepository(QuestionTypeRepository) private questionTypeRepository: QuestionTypeRepository) {}

    async findById(id: string): Promise<QuestionTypeDTO | undefined> {
        const options = { relations: relationshipNames };
        const result = await this.questionTypeRepository.findOne(id, options);
        result.sections.sort((a, b) => a.sectionNumber - b.sectionNumber)
        return QuestionTypeMapper.fromEntityToDTO(result);
    }

    async findByfields(options: FindOneOptions<QuestionTypeDTO>): Promise<QuestionTypeDTO | undefined> {
        options.relations = relationshipNames;

        const result = await this.questionTypeRepository.findOne(options);
        return QuestionTypeMapper.fromEntityToDTO(result);
    }

    async findAndCount(options: FindManyOptions<QuestionTypeDTO>): Promise<[QuestionType[], number]> {
        options.relations = relationshipNames;
        const resultList = await this.questionTypeRepository.findAndCount(options);
        return resultList;
    }

    async save(questionTypeDTO: QuestionTypeDTO): Promise<QuestionTypeDTO | undefined> {
        const entity = QuestionTypeMapper.fromDTOtoEntity(questionTypeDTO);
        const result = await this.questionTypeRepository.save(entity);
        return QuestionTypeMapper.fromEntityToDTO(result);
    }

    async update(questionTypeDTO: QuestionTypeDTO): Promise<QuestionTypeDTO | undefined> {
        const entity = QuestionTypeMapper.fromDTOtoEntity(questionTypeDTO);
        const result = await this.questionTypeRepository.save(entity);
        return QuestionTypeMapper.fromEntityToDTO(result);
    }

    async deleteById(id: string): Promise<void | undefined> {
        await this.questionTypeRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }

    async getRandom(): Promise<QuestionType> {
        const questionTypes = await this.questionTypeRepository.find()
        const questionType = await questionTypes[Math.floor(Math.random() * questionTypes.length)];
        return questionType;
    }


    


}
