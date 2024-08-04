/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { CandidateAnswerDTO } from './candidate-answer.dto';
import { SectionDTO } from './section.dto';

/**
 * A Question DTO object.
 */
export class QuestionDTO extends BaseDTO {
    /**
     * question
     */
    @ApiModelProperty({ description: 'question', required: false })
    question: string;

    /**
     * questionNumber
     */
    @ApiModelProperty({ description: 'questionNumber', required: false })
    questionNumber: number;

    /**
     * a
     */
    @ApiModelProperty({ description: 'a', required: false })
    a: string;

    /**
     * b
     */
    @ApiModelProperty({ description: 'b', required: false })
    b: string;

    /**
     * c
     */
    @ApiModelProperty({ description: 'c', required: false })
    c: string;

    /**
     * a
     */
    @ApiModelProperty({ description: 'a', required: false })
    d: string;

    /**
     * a
     */
    @ApiModelProperty({ description: 'a', required: false })
    e: string;

    /**
     * a
     */
    @ApiModelProperty({ description: 'a', required: false })
    answer: string;

    @ApiModelProperty({ type: CandidateAnswerDTO, description: 'candidateAnswer relationship' })
    candidateAnswer: CandidateAnswerDTO;

    @ApiModelProperty({ type: SectionDTO, description: 'section relationship' })
    section: SectionDTO;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
