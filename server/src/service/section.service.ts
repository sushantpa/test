import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { SectionDTO } from '../service/dto/section.dto';
import { SectionMapper } from '../service/mapper/section.mapper';
import { SectionRepository } from '../repository/section.repository';
import { Section } from '../domain/section.entity';

const relationshipNames = ['questions'];

@Injectable()
export class SectionService {
    logger = new Logger('SectionService');

    constructor(@InjectRepository(SectionRepository) private sectionRepository: SectionRepository) {}

    async findById(id: string): Promise<SectionDTO | undefined> {
        const options = { relations: relationshipNames };
        const result = await this.sectionRepository.findOne(id, options);
        return SectionMapper.fromEntityToDTO(result);
    }

    async findByfields(options: FindOneOptions<SectionDTO>): Promise<SectionDTO | undefined> {
        const result = await this.sectionRepository.findOne(options);
        return SectionMapper.fromEntityToDTO(result);
    }

    async findAndCount(options: FindManyOptions<SectionDTO>): Promise<[Section[], number]> {
        options.relations = relationshipNames;
        const resultList = await this.sectionRepository.findAndCount(options);
        return resultList;
    }

    async save(sectionDTO: SectionDTO): Promise<SectionDTO | undefined> {
        const entity = SectionMapper.fromDTOtoEntity(sectionDTO);
        const result = await this.sectionRepository.save(entity);
        return SectionMapper.fromEntityToDTO(result);
    }

    async update(sectionDTO: SectionDTO): Promise<SectionDTO | undefined> {
        const entity = SectionMapper.fromDTOtoEntity(sectionDTO);
        const result = await this.sectionRepository.save(entity);
        return SectionMapper.fromEntityToDTO(result);
    }

    async deleteById(id: string): Promise<void | undefined> {
        await this.sectionRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }
}
