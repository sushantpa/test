import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios'
import { CandidateTestController } from '../web/rest/candidate-test.controller';
import { CandidateTestRepository } from '../repository/candidate-test.repository';
import { CandidateTestService } from '../service/candidate-test.service';
import { CandidateService } from '../service/candidate.service';
import { CandidateRepository } from '../repository/candidate.repository';
import { CandidateAnswerRepository } from '../repository/candidate-answer.repository';
import { CandidateAnswerService } from '../service/candidate-answer.service';
import { QuestionTypeRepository } from '../repository/question-type.repository';
import { ZohoRecruitService } from '../service/zohoRecruit.service';

@Module({
    imports: [TypeOrmModule.forFeature([CandidateTestRepository, CandidateRepository, CandidateAnswerRepository, QuestionTypeRepository]), HttpModule],
    controllers: [CandidateTestController],
    providers: [CandidateTestService, CandidateService, CandidateAnswerService, ZohoRecruitService],
    exports: [CandidateTestService],
})
export class CandidateTestModule {}
