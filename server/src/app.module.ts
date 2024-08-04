import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module/auth.module';
import { ormConfig } from './orm.config';
import { config } from './config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CandidateModule } from './module/candidate.module';
import { CandidateTestModule } from './module/candidate-test.module';
import { SectionModule } from './module/section.module';
import { QuestionModule } from './module/question.module';
import { CandidateAnswerModule } from './module/candidate-answer.module';
import { QuestionTypeModule } from './module/question-type.module';
import { ApiKeyAuthMiddleware } from './middleware/apiKeyAuth.middleware';
import { WebhookModule } from './module/webhook.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './module/task.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
        ServeStaticModule.forRoot({
            rootPath: config.getClientPath(),
        }),
        ScheduleModule.forRoot(),
        TasksModule,
        AuthModule,
        CandidateModule,
        CandidateTestModule,
        SectionModule,
        QuestionModule,
        CandidateAnswerModule,
        QuestionTypeModule,
        WebhookModule,
    ],
    controllers: [
        
    ],
    providers: [
       
    ],
})
export class AppModule {}
