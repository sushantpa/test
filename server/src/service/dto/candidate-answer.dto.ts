/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { QuestionDTO } from './question.dto';
import { CandidateTestDTO } from './candidate-test.dto';

/**
 * A CandidateAnswer DTO object.
 */
export class CandidateAnswerDTO extends BaseDTO {
    /**
     * fieldName
     */
    @ApiModelProperty({ description: 'fieldName', required: false })
    answer: string;

    @ApiModelProperty({ type: String, description: 'questionId relationship' })
    questionId: string;

    @ApiModelProperty({ type: String, description: 'candidateTestId relationship' })
    candidateTestId: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
