import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from '../web/rest/question.controller';
import { QuestionRepository } from '../repository/question.repository';
import { QuestionService } from '../service/question.service';

@Module({
    imports: [TypeOrmModule.forFeature([QuestionRepository])],
    controllers: [QuestionController],
    providers: [QuestionService],
    exports: [QuestionService],
})
export class QuestionModule {}
