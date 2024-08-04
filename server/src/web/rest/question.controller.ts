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
import { QuestionDTO } from '../../service/dto/question.dto';
import { QuestionService } from '../../service/question.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { Question } from '../../domain/question.entity';

@Controller('api/questions')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiUseTags('questions')
export class QuestionController {
    logger = new Logger('QuestionController');

    constructor(private readonly questionService: QuestionService) {}

    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: QuestionDTO,
    })
    async getAll(@Req() req: Request): Promise<Question[]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.questionService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
        return results;
    }

    @Get('/:id')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: QuestionDTO,
    })
    async getOne(@Param('id') id: string): Promise<QuestionDTO> {
        return await this.questionService.findById(id);
    }

    @PostMethod('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Create question' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: QuestionDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async post(@Req() req: Request, @Body() questionDTO: QuestionDTO): Promise<QuestionDTO> {
        const created = await this.questionService.save(questionDTO);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Question', created.id);
        return created;
    }

    @Put('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update question' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: QuestionDTO,
    })
    async put(@Req() req: Request, @Body() questionDTO: QuestionDTO): Promise<QuestionDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Question', questionDTO.id);
        return await this.questionService.update(questionDTO);
    }

    @Put('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update question with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: QuestionDTO,
    })
    async putId(@Req() req: Request, @Body() questionDTO: QuestionDTO): Promise<QuestionDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Question', questionDTO.id);
        return await this.questionService.update(questionDTO);
    }

    @Delete('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Delete question' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    })
    async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
        HeaderUtil.addEntityDeletedHeaders(req.res, 'Question', id);
        return await this.questionService.deleteById(id);
    }
}
