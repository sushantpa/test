import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateController } from '../web/rest/candidate.controller';
import { CandidateRepository } from '../repository/candidate.repository';
import { CandidateService } from '../service/candidate.service';
import { UserRepository } from '../repository/user.repository';
import { CandidateTestRepository } from '../repository/candidate-test.repository';
import { QuestionTypeRepository } from '../repository/question-type.repository';
import { QuestionTypeService } from '../service/question-type.service';
import { CandidateTestService } from '../service/candidate-test.service';

@Module({
    imports: [TypeOrmModule.forFeature([ CandidateRepository, UserRepository, CandidateTestRepository, QuestionTypeRepository, CandidateTestRepository]), HttpModule],
    controllers: [CandidateController],
    providers: [CandidateService, QuestionTypeService, CandidateTestService],
    exports: [CandidateService],
})
export class CandidateModule {}
