import { Injectable, HttpException, HttpStatus, Logger, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Equal, FindOneOptions, IsNull, Like, Not  } from 'typeorm';
import { CandidateDTO } from '../service/dto/candidate.dto';
import { CandidateMapper } from '../service/mapper/candidate.mapper';
import { CandidateRepository } from '../repository/candidate.repository';
import { CandidateTest } from '../domain/candidate-test.entity';
import { User } from '../domain/user.entity';
import { Candidate } from '../domain/candidate.entity';
import { Authority } from '../domain/authority.entity';
import moment from 'moment';
import { QuestionTypeRepository } from '../repository/question-type.repository';
import { CandidateTestRepository } from '../repository/candidate-test.repository';
import generator from 'generate-password'
import dayjs from 'dayjs';

const relationshipNames = ['candidateTests'];


@Injectable()
export class CandidateService {
    logger = new Logger('CandidateService');

    constructor(
        @InjectRepository(CandidateRepository) private candidateRepository: CandidateRepository,
        @InjectRepository(QuestionTypeRepository) private questionTypeRepository: QuestionTypeRepository,
        @InjectRepository(CandidateTestRepository) private candidateTestRepository: CandidateTestRepository,
    ) { }

    async findById(id: string): Promise<Candidate | undefined> {
        const options = { relations: ['candidateTests', 'user' ] };
        const result = await this.candidateRepository.findOne(id, options);
        return result;
    }

    async findByfields(options: FindOneOptions<Candidate>): Promise<Candidate | undefined> {
        options.relations = relationshipNames;
        const result = await this.candidateRepository.findOne(options);
        return result;
    }

    async find(options): Promise<[Candidate[], number]> {
        const haveTakenTest = [
            { firstName: Like(`%${options.search}%`), lastTestDate: Not(IsNull()) },
            { lastName: Like(`%${options.search}%`), lastTestDate: Not(IsNull()) },
            { email: Like(`%${options.search}%`), lastTestDate: Not(IsNull()) },
            { fullName: Like(`%${options.search}%`), lastTestDate: Not(IsNull()) },
        ];

        const all = [
            { firstName: Like(`%${options.search}%`) },
            { lastName: Like(`%${options.search}%`) },
            { email: Like(`%${options.search}%`) },
            { fullName: Like(`%${options.search}%`) },

        ];
        const resultList = await this.candidateRepository.findAndCount({
        where: options.lastTestDate === "true" ? haveTakenTest : all,
            order: {
                createdDate : "DESC"
            },
            skip: options.skip,
            take: options.take,
            relations: ["candidateTests"] 
        })
        return resultList        
    }

    async downloadCandidate({ startDate, endDate, lastTestDate }) {
        let filter = {}
    
    
        if (startDate && endDate && lastTestDate === "true") {
            filter = { registrationDate: Between(startDate, endDate), lastTestDate: Not(IsNull())}
        }

         if (startDate && endDate) {
            filter = { registrationDate: Between(startDate, endDate)}
         }
        
        if (lastTestDate) {
            filter = { lastTestDate: Not(IsNull())}
        }

        const candidateList = await this.candidateRepository.find({
            where: filter
        });
        const candidates = candidateList.map((candidate) => {
            return {
                NAME: `${candidate.firstName} ${candidate.lastName}`,
                STATUS: candidate.canTakeTest ? "ACTIVE" : "INACTIVE",
                DATE_REGISTERED: dayjs(candidate.registrationDate).format('YYYY-MM-DD'),
                TEST_DATE: candidate.lastTestDate ? dayjs(candidate.lastTestDate).format('YYYY-MM-DD') : "NOT_TAKEN",
                EMAIL: candidate.email,
                SCORE: candidate.latestTestScore
            }
        })
        return candidates;
    }

    async save(candidateDTO: CandidateDTO): Promise<Candidate| undefined> {
        const entity = CandidateMapper.fromDTOtoEntity(candidateDTO);
        const candidate = await this.candidateRepository.findOne({ email: candidateDTO.email}, { relations: relationshipNames });
        if (candidate) {
            const candidateLastTestDate = moment(candidate.lastTestDate);
            const today = moment()
            const canTakeTest = today.diff(candidateLastTestDate, 'months')
            if (canTakeTest > 6) {
                const candidateTest = new CandidateTest()
                const questionType = await this.questionTypeRepository.getRandom();
                candidateTest.questionType = questionType.typeKey
                candidate.candidateTests = [candidateTest, ...candidate.candidateTests];
                candidate.canTakeTest = true;
                candidate.testTakenCount = candidate.testTakenCount + 1;
                await this.candidateRepository.save(candidate);
                return candidate;
            }
            throw new HttpException("User Already Exit", HttpStatus.BAD_REQUEST);
        }
        const questionType = await this.questionTypeRepository.getRandom();
        const user = new User()
        const authority = new Authority()
        authority.name = 'ROLE_USER'
        user.login = candidateDTO.email;
        user.firstName = candidateDTO.firstName;
        user.lastName = candidateDTO.lastName;
        user.email = candidateDTO.email;
        user.authorities = [authority]
        user.password = generator.generate({ length: 8, numbers: true }),
        user.activated = true;
        entity.user = user
        const candidateTest = new CandidateTest()
        candidateTest.questionType = questionType.typeKey
        candidateTest.testScheduledDate = moment(moment().toDate()).add(3, 'days').toDate()
        entity.candidateTests = [candidateTest]
        const result = await this.candidateRepository.save(entity);
       return result;
    }

    async activate(id: string) {
        const candidate = await this.candidateRepository.findOneOrFail(id, { relations: ['candidateTests']})
        if (!candidate.id) {
            throw new HttpException("Candidate not Found", HttpStatus.BAD_REQUEST);
        }
        const candidateTest = new CandidateTest()
        const questionType = await this.questionTypeRepository.getRandom();
        candidateTest.questionType = questionType.typeKey
        candidate.candidateTests = [candidateTest, ...candidate.candidateTests];
        candidate.canTakeTest = true;
        await this.candidateRepository.save(candidate);
        return candidate;
    }

    async deactivate(id: string) {
        const candidate = await this.candidateRepository.findOneOrFail(id)
        if (!candidate.id) {
            throw new HttpException("Candidate not Found", HttpStatus.BAD_REQUEST);
        }
        candidate.canTakeTest = false;
        await this.candidateRepository.save(candidate);
        return candidate;
    }

    async update(candidateDTO: CandidateDTO): Promise<CandidateDTO | undefined> {
        const entity = CandidateMapper.fromDTOtoEntity(candidateDTO);
        const result = await this.candidateRepository.save(entity);
        return CandidateMapper.fromEntityToDTO(result);
    }

    async deleteById(id: string): Promise<void | undefined> {
        await this.candidateRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }

    async getCandidateLatestTest(userId: string) {
        const candidate =  await this.candidateRepository.find({
            where: {
                user: {
                    id : Equal(userId)
                }
            },
        })
        if (candidate?.length > 0) {
            const candidateTest = await this.candidateTestRepository.find({
                where: {
                    candidate: {
                        id : candidate[0].id
                    }
                },
                order: {
                    createdDate : "DESC"
                 }
               })
               return candidateTest[0];
        }
        throw new HttpException("Candidate Does not Exit", HttpStatus.BAD_REQUEST);
    }
  
    async findCandidateByUserId(userId: string) {
        const candidate =  await this.candidateRepository.find({
            where: {
                user: {
                    id : Equal(userId)
                }
            },
        })
        if (candidate?.length > 0) {

               return candidate[0];
        }
        throw new HttpException("Candidate Does not Exit", HttpStatus.BAD_REQUEST);
    }


    async updateCandidate(id: string, update) {
        const candidate = await this.candidateRepository.update(id, update)
        return candidate
    }
}
