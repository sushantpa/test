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
import { CandidateAnswerDTO } from '../../service/dto/candidate-answer.dto';
import { CandidateAnswerService } from '../../service/candidate-answer.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { CandidateAnswer } from '../../domain/candidate-answer.entity';

@Controller('api/candidate-answers')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiUseTags('candidate-answers')
export class CandidateAnswerController {
    logger = new Logger('CandidateAnswerController');

    constructor(private readonly candidateAnswerService: CandidateAnswerService) {}

    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: CandidateAnswerDTO,
    })
    async getAll(@Req() req: Request): Promise<CandidateAnswer[]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.candidateAnswerService.findAndCount({
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
        type: CandidateAnswerDTO,
    })
    async getOne(@Param('id') id: string): Promise<CandidateAnswerDTO> {
        return await this.candidateAnswerService.findById(id);
    }

    @PostMethod('/')
    @Roles(RoleType.USER)
    @ApiOperation({ title: 'Create candidateAnswer' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: CandidateAnswerDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async post(@Req() req: Request, @Body() candidateAnswerDTO: CandidateAnswerDTO): Promise<CandidateAnswerDTO> {
        const created = await this.candidateAnswerService.save(candidateAnswerDTO);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'CandidateAnswer', created.id);
        return created;
    }

    @Put('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update candidateAnswer' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CandidateAnswerDTO,
    })
    async put(@Req() req: Request, @Body() candidateAnswerDTO: CandidateAnswerDTO): Promise<CandidateAnswerDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'CandidateAnswer', candidateAnswerDTO.id);
        return await this.candidateAnswerService.update(candidateAnswerDTO);
    }

    @Put('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update candidateAnswer with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CandidateAnswerDTO,
    })
    async putId(@Req() req: Request, @Body() candidateAnswerDTO: CandidateAnswerDTO): Promise<CandidateAnswerDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'CandidateAnswer', candidateAnswerDTO.id);
        return await this.candidateAnswerService.update(candidateAnswerDTO);
    }

    @Delete('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Delete candidateAnswer' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    })
    async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
        HeaderUtil.addEntityDeletedHeaders(req.res, 'CandidateAnswer', id);
        return await this.candidateAnswerService.deleteById(id);
    }
}
