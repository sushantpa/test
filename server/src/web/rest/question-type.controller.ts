import {
    Body,
    Controller,
    Delete,
    Get,
    Logger,
    Param,
    Post as PostMethod,
    Put,
    UseGuards,
    Req,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { QuestionTypeDTO } from '../../service/dto/question-type.dto';
import { QuestionTypeService } from '../../service/question-type.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { QuestionType } from '../../domain/question-type.entity';
import { CandidateService } from '../../service/candidate.service';
import { CandidateTestService } from '../../service/candidate-test.service';

@Controller('api/question-types')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiUseTags('question-types')
export class QuestionTypeController {
    logger = new Logger('QuestionTypeController');

    constructor(
        private readonly questionTypeService: QuestionTypeService,
        private readonly candidateTestService: CandidateTestService)
    { }

    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: QuestionTypeDTO,
    })
    async getAll(@Req() req: Request): Promise<QuestionType[]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.questionTypeService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
        return results;
    }

    @Get('/:id/get-candidate-questions')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: QuestionTypeDTO,
    })
    async getSections(@Req() req: Request, @Param('id') candidateTestId): Promise<QuestionTypeDTO> {
        const user: any = req.user;
        const candidateTest = await this.candidateTestService.findById(candidateTestId);
        const candidateQuestionType = await this.questionTypeService.findByfields({ where: { typeKey: candidateTest.questionType } });
        candidateQuestionType.sections.forEach((section) => {
            return section.questions.sort((a, b) => a.questionNumber - b.questionNumber )
        })
        candidateQuestionType.sections.sort((a, b) => a.sectionNumber - b.sectionNumber)
        return candidateQuestionType;
    }

    @Get('/:id')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: QuestionTypeDTO,
    })
    async getOne(@Param('id') id: string): Promise<QuestionTypeDTO> {
        return await this.questionTypeService.findById(id);
    }


    @PostMethod('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Create questionType' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: QuestionTypeDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async post(@Req() req: Request, @Body() questionTypeDTO: QuestionTypeDTO): Promise<QuestionTypeDTO> {
        const created = await this.questionTypeService.save(questionTypeDTO);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'QuestionType', created.id);
        return created;
    }

    @Put('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update questionType' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: QuestionTypeDTO,
    })
    async put(@Req() req: Request, @Body() questionTypeDTO: QuestionTypeDTO): Promise<QuestionTypeDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'QuestionType', questionTypeDTO.id);
        return await this.questionTypeService.update(questionTypeDTO);
    }

    @Put('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update questionType with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: QuestionTypeDTO,
    })
    async putId(@Req() req: Request, @Body() questionTypeDTO: QuestionTypeDTO): Promise<QuestionTypeDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'QuestionType', questionTypeDTO.id);
        return await this.questionTypeService.update(questionTypeDTO);
    }

    @Delete('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Delete questionType' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    })
    async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
        HeaderUtil.addEntityDeletedHeaders(req.res, 'QuestionType', id);
        return await this.questionTypeService.deleteById(id);
    }
}