import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios'
import { WebhookController } from '../web/rest/webhook.controller';
import { CandidateRepository } from '../repository/candidate.repository';
import { CandidateService } from '../service/candidate.service';
import { UserRepository } from '../repository/user.repository';
import { CandidateTestRepository } from '../repository/candidate-test.repository';
import { QuestionTypeRepository } from '../repository/question-type.repository';
import { QuestionTypeService } from '../service/question-type.service';
import { ZohoRecruitService } from '../service/zohoRecruit.service';


@Module({
     imports: [TypeOrmModule.forFeature([ CandidateRepository, UserRepository, CandidateTestRepository, QuestionTypeRepository]), HttpModule],
    controllers: [WebhookController],
    providers: [CandidateService, QuestionTypeService, ZohoRecruitService],
    exports: [CandidateService],
})
export class WebhookModule {}
