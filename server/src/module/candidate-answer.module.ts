import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateAnswerController } from '../web/rest/candidate-answer.controller';
import { CandidateAnswerRepository } from '../repository/candidate-answer.repository';
import { CandidateAnswerService } from '../service/candidate-answer.service';

@Module({
    imports: [TypeOrmModule.forFeature([CandidateAnswerRepository])],
    controllers: [CandidateAnswerController],
    providers: [CandidateAnswerService],
    exports: [CandidateAnswerService],
})
export class CandidateAnswerModule {}
