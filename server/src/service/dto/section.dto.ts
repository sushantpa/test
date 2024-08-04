/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { QuestionDTO } from './question.dto';

/**
 * A Section DTO object.
 */
export class SectionDTO extends BaseDTO {
    /**
     * fieldName
     */
    @ApiModelProperty({ description: 'fieldName', required: false })
    sectionQuestion: string;

    /**
     * sectionNumberHeading
     */
    @ApiModelProperty({ description: 'sectionNumberHeading', required: false })
    sectionNumberHeading: string;

    /**
     * sectionNumber
     */
    @ApiModelProperty({ description: 'sectionNumber', required: false })
    sectionNumber: number;

    @ApiModelProperty({ type: QuestionDTO, isArray: true, description: 'questions relationship' })
    questions: QuestionDTO[];

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
