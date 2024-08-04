import {
    Body,
    Controller,
    Logger,
    Post as PostMethod,
    Req,
    UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { CandidateDTO } from '../../service/dto/candidate.dto';
import { CandidateService } from '../../service/candidate.service';
import { HeaderUtil } from '../../client/header-util';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { ZohoRecruitService } from '../../service/zohoRecruit.service';

@Controller('webhook')
@UseInterceptors(LoggingInterceptor)
export class WebhookController {
    logger = new Logger('WebhookController');

    constructor(
         private readonly candidateService: CandidateService,
         private zohoRecruitService: ZohoRecruitService,
       ) {}
    

    @PostMethod('/add-candidate')
    async post(@Req() req: Request, @Body() candidateDTO: CandidateDTO): Promise<CandidateDTO> {
        const created = await this.candidateService.save(candidateDTO);
        const data = JSON.stringify({ data: [{ Assessment_Pass: created.user.password }] })
        await this.zohoRecruitService.updateCandidateRecord(created.zohoRecruitId, data);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Candidate', created.id);
        return created;
    }
}

