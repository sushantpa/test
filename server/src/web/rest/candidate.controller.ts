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
import { Request, Response} from 'express';
import { CandidateDTO } from '../../service/dto/candidate.dto';
import { CandidateService } from '../../service/candidate.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { Candidate } from '../../domain/candidate.entity';
import { CandidateTest } from '../../domain/candidate-test.entity';


@Controller('api/candidates')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiUseTags('candidates')
export class CandidateController {
    logger = new Logger('CandidateController');

    constructor(private readonly candidateService: CandidateService) {}
    

    @Get('/myCandidateRecord')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: CandidateTest
    })   
    async getLoginCandidateRecord(@Req() req: Request) {
        const { id }: any = req.user;
        const record = await this.candidateService.getCandidateLatestTest(id)
        return record
    }

    @Get('/')
    @Roles(RoleType.ADMIN)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: CandidateDTO,
    })
    async getAll(@Req() req: Request): Promise<[Candidate[], number]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const results = await this.candidateService.find({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            search: req.query.search || "",
            lastTestDate: req.query.lastTestDate || ""
        });
        // HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
        return results;
    }

    @Get('/download')
    @Roles(RoleType.ADMIN)
    @ApiResponse({
        status: 200,
        description: 'download all records',
        type: CandidateDTO,
    })
    async downloadCandidate(@Req() req: Request) {
        return await this.candidateService.downloadCandidate(req.query);         
    }

    @Get('/:id')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: CandidateDTO,
    })
    async getOne(@Param('id') id: string): Promise<CandidateDTO> {
        return await this.candidateService.findById(id);
    }

    @PostMethod('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Create candidate' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: CandidateDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async post(@Req() req: Request, @Body() candidateDTO: CandidateDTO): Promise<Candidate> {
        const created = await this.candidateService.save(candidateDTO);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Candidate', created.id);
        return created;
    }

    @Put('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update candidate' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CandidateDTO,
    })
    async put(@Req() req: Request, @Body() candidateDTO: CandidateDTO): Promise<CandidateDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Candidate', candidateDTO.id);
        return await this.candidateService.update(candidateDTO);
    }

    @Put('/:id/activate')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update candidate with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CandidateDTO,
    })
    async activate(@Req() req: Request, @Param() id: string): Promise<Candidate> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Candidate', id);
        return await this.candidateService.activate(id);
    }

    @Put('/:id/deactivate')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update candidate with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: Candidate,
    })
    async deactivate (@Req() req: Request, @Param() id: string): Promise<Candidate> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Candidate', id);
        return await this.candidateService.deactivate(id);
    }

    @Put('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update candidate with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: Candidate,
    })
    async putId(@Req() req: Request, @Body() candidateDTO: CandidateDTO): Promise<CandidateDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Candidate', candidateDTO.id);
        return await this.candidateService.update(candidateDTO);
    }

    @Delete('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Delete candidate' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    })
    async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
        HeaderUtil.addEntityDeletedHeaders(req.res, 'Candidate', id);
        return await this.candidateService.deleteById(id);
    }
}
