import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionTypeController } from '../web/rest/question-type.controller';
import { QuestionTypeRepository } from '../repository/question-type.repository';
import { QuestionTypeService } from '../service/question-type.service';
import { CandidateRepository } from '../repository/candidate.repository';
import { CandidateService } from '../service/candidate.service';
import { CandidateTestRepository } from '../repository/candidate-test.repository';
import { CandidateTestService } from '../service/candidate-test.service';

@Module({
    imports: [TypeOrmModule.forFeature([QuestionTypeRepository, CandidateRepository, CandidateTestRepository])],
    controllers: [QuestionTypeController],
    providers: [QuestionTypeService, CandidateTestService],
    exports: [QuestionTypeService],
})
export class QuestionTypeModule {}