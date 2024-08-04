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
import { SectionDTO } from '../../service/dto/section.dto';
import { SectionService } from '../../service/section.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { Section } from '../../domain/section.entity';
import _ from 'lodash'
import { QuestionService } from 'src/service/question.service';
@Controller('api/sections')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiUseTags('sections')
export class SectionController {
    logger = new Logger('SectionController');

    constructor(private readonly sectionService: SectionService) {}

    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: SectionDTO,
    })
    async getAll(@Req() req: Request): Promise<Section[]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.sectionService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: {
                sectionNumber: "ASC"
            },
        });
         results.forEach(section => {
            return section.questions.sort((a,b) => a.questionNumber - b.questionNumber)
        })
        HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
        return results;
    }

    @Get('/:id')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: SectionDTO,
    })
    async getOne(@Param('id') id: string): Promise<SectionDTO> {
        return await this.sectionService.findById(id);
    }

    @PostMethod('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Create section' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: SectionDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async post(@Req() req: Request, @Body() sectionDTO: SectionDTO): Promise<SectionDTO> {
        const created = await this.sectionService.save(sectionDTO);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Section', created.id);
        return created;
    }

    @Put('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update section' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: SectionDTO,
    })
    async put(@Req() req: Request, @Body() sectionDTO: SectionDTO): Promise<SectionDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Section', sectionDTO.id);
        return await this.sectionService.update(sectionDTO);
    }

    @Put('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update section with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: SectionDTO,
    })
    async putId(@Req() req: Request, @Body() sectionDTO: SectionDTO): Promise<SectionDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Section', sectionDTO.id);
        return await this.sectionService.update(sectionDTO);
    }

    @Delete('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Delete section' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    })
    async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
        HeaderUtil.addEntityDeletedHeaders(req.res, 'Section', id);
        return await this.sectionService.deleteById(id);
    }
}
