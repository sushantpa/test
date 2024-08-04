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
import { CandidateTestDTO } from '../../service/dto/candidate-test.dto';
import { CandidateTestService } from '../../service/candidate-test.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import moment from 'moment';
import { CandidateTest } from '../../domain/candidate-test.entity';
import { CandidateService } from '../../service/candidate.service';
import { CandidateAnswerDTO } from '../../service/dto/candidate-answer.dto';
import { CandidateAnswer } from '../../domain/candidate-answer.entity';
import { CandidateAnswerService } from '../../service/candidate-answer.service';
import { User } from 'src/domain/user.entity';
import { ZohoRecruitService } from '../../service/zohoRecruit.service';

@Controller('api/candidate-tests')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiUseTags('candidate-tests')
export class CandidateTestController {
    logger = new Logger('CandidateTestController');

    constructor(
        private readonly candidateTestService: CandidateTestService,
        private readonly candidateService: CandidateService,
        private readonly candidateAnswerService: CandidateAnswerService,
        private zohoRecruitService: ZohoRecruitService,
    ) { }

    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: CandidateTestDTO,
    })
    async getAll(@Req() req: Request): Promise<CandidateTest[]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.candidateTestService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
        return results;
    }

    @Get('/:id/remaining-time')
    @Roles(RoleType.USER)
    @ApiOperation({
        title: 'Get Assessment time' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: Number
    })
    async getRemainingTime(@Req() req: Request, @Param('id') candidateTestId) {
        const candidateTest = await this.candidateTestService.findById(candidateTestId);
        const remainingTime = moment(candidateTest.testEndDateTime).diff(moment().toDate(), 'seconds')
        return remainingTime
    }

    @Get('/:id')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: CandidateTestDTO,
    })
    async getOne(@Param('id') id: string): Promise<CandidateTest> {
        return await this.candidateTestService.findById(id);
    }

    @PostMethod('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Create candidateTest' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: CandidateTestDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async post(@Req() req: Request, @Body() candidateTestDTO: CandidateTestDTO): Promise<CandidateTestDTO> {
        const created = await this.candidateTestService.save(candidateTestDTO);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'CandidateTest', created.id);
        return created;
    }

    @Put('/:id/start')
    @Roles(RoleType.USER)
    @ApiOperation({
        title: 'Start Assessment' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CandidateTest,
    })
    async startAssessment(@Req() req: Request, @Param('id') id: string) {
        const testStartDateTime = moment().toDate()
        const testEndDateTime = moment(testStartDateTime).add(90, 'minutes').toDate()
        const candidateTest = await this.candidateTestService.findById(id);
        candidateTest.testStartDateTime = testStartDateTime;
        candidateTest.testEndDateTime = testEndDateTime,
        candidateTest.testStarted = true
        const startedCandidateTest = await this.candidateTestService.updateCandidateTest(id, candidateTest)
        if (startedCandidateTest) {
            return { message : 'Candidate Test Started Successfully' }
        }
    }

    @Put('/:id/submit')
    @Roles(RoleType.USER)
    @ApiOperation({ title: 'Submit Assessment' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.'
    })
    async submitAssessment(@Req() req: Request, @Body() answers: CandidateAnswerDTO[], @Param('id') candidateTestId) {
        const user: any = req.user;
        const candidateTest = await this.candidateTestService.submit(candidateTestId,answers)
        const candidate = await this.candidateService.findCandidateByUserId(user?.id);
        candidate.testTakenCount = candidate.testTakenCount + 1;
        candidate.lastTestDate = moment().toDate()
        candidate.canTakeTest = false
        candidate.latestTestScore = candidateTest.testScore
        await this.candidateService.updateCandidate(candidate.id, candidate);
        // if (candidate.zohoRecruitId) {
        //     const data = JSON.stringify({ data: [{ Score: candidateTest.testScore, Assessment_Done: "Yes" }] })
        //     await this.zohoRecruitService.updateCandidateRecord(candidate.zohoRecruitId, data);
        // }
        return candidateTest
    }

    @Put('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update candidateTest' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CandidateTestDTO,
    })
    async put(@Req() req: Request, @Body() candidateTestDTO: CandidateTestDTO): Promise<CandidateTestDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'CandidateTest', candidateTestDTO.id);
        return await this.candidateTestService.update(candidateTestDTO);
    }



    @Put('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update candidateTest with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CandidateTestDTO,
    })
    async putId(@Req() req: Request, @Body() candidateTestDTO: CandidateTestDTO): Promise<CandidateTestDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'CandidateTest', candidateTestDTO.id);
        return await this.candidateTestService.update(candidateTestDTO);
    }

    @Delete('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Delete candidateTest' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    })
    async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
        HeaderUtil.addEntityDeletedHeaders(req.res, 'CandidateTest', id);
        return await this.candidateTestService.deleteById(id);
    }
}
