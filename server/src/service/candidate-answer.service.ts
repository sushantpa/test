import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { CandidateAnswerDTO } from '../service/dto/candidate-answer.dto';
import { CandidateAnswerMapper } from '../service/mapper/candidate-answer.mapper';
import { CandidateAnswerRepository } from '../repository/candidate-answer.repository';
import { CandidateAnswer } from '../domain/candidate-answer.entity';

const relationshipNames = [];
relationshipNames.push('candidateTest');

@Injectable()
export class CandidateAnswerService {
    logger = new Logger('CandidateAnswerService');

    constructor(
        @InjectRepository(CandidateAnswerRepository) private candidateAnswerRepository: CandidateAnswerRepository,
    ) {}

    async findById(id: string): Promise<CandidateAnswerDTO | undefined> {
        const options = { relations: relationshipNames };
        const result = await this.candidateAnswerRepository.findOne(id, options);
        return CandidateAnswerMapper.fromEntityToDTO(result);
    }

    async findByfields(options: FindOneOptions<CandidateAnswer>): Promise<CandidateAnswer | undefined> {
        const result = await this.candidateAnswerRepository.findOne(options);
        return result;
    }

    async findAndCount(options: FindManyOptions<CandidateAnswer>): Promise<[CandidateAnswer[], number]> {
        options.relations = relationshipNames;
        const resultList = await this.candidateAnswerRepository.findAndCount(options);
        const candidateAnswerDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach((candidateAnswer) =>
                candidateAnswerDTO.push(CandidateAnswerMapper.fromEntityToDTO(candidateAnswer)),
            );
            resultList[0] = candidateAnswerDTO;
        }
        return resultList;
    }

    async save(candidateAnswerDTO: CandidateAnswerDTO): Promise<CandidateAnswerDTO | undefined> {
        const entity = CandidateAnswerMapper.fromDTOtoEntity(candidateAnswerDTO);
        const result = await this.candidateAnswerRepository.save(entity);
        return CandidateAnswerMapper.fromEntityToDTO(result);
    }

    async update(candidateAnswerDTO: CandidateAnswerDTO): Promise<CandidateAnswerDTO | undefined> {
        const entity = CandidateAnswerMapper.fromDTOtoEntity(candidateAnswerDTO);
        const result = await this.candidateAnswerRepository.save(entity);
        return CandidateAnswerMapper.fromEntityToDTO(result);
    }

    async deleteById(id: string): Promise<void | undefined> {
        await this.candidateAnswerRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }
}
