/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { CandidateAnswerDTO } from './candidate-answer.dto';
import { CandidateDTO } from './candidate.dto';

/**
 * A CandidateTest DTO object.
 */
export class CandidateTestDTO extends BaseDTO {
    /**
     * testCompletionDate
     */
    @ApiModelProperty({ description: 'testCompletionDate', required: false })
    testCompletionDate: any;

    /**
     * testScore
     */
    @ApiModelProperty({ description: 'testScore', required: false })
    testScore: number;

    /**
     * testScheduledDate
     */
    @ApiModelProperty({ description: 'testScheduledDate', required: false })
    testScheduledDate: any;

    /**
     * questionsAttempted
     */
    @ApiModelProperty({ description: 'questionsAttempted', required: false })
    questionsAttempted: string;

    /**
     * remainingTime
     */
    @ApiModelProperty({ description: 'remainingTime', required: false })
    remainingTime: string;

    /**
     * testStartDateTime
     */
    @ApiModelProperty({ description: 'testStartDateTime', required: false })
    testStartDateTime: any;

    /**
     * testEndDateTime
     */
    @ApiModelProperty({ description: 'testEndDateTime', required: false })
    testEndDateTime: any;

    @ApiModelProperty({ type: CandidateAnswerDTO, isArray: true, description: 'candidateAnswers relationship' })
    candidateAnswers: CandidateAnswerDTO[];

    @ApiModelProperty({ type: CandidateDTO, description: 'candidate relationship' })
    candidate: CandidateDTO;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
