/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { SectionDTO } from './section.dto';

/**
 * A QuestionType DTO object.
 */
export class QuestionTypeDTO extends BaseDTO {
    /**
     * fieldName
     */
    @ApiModelProperty({ description: 'fieldName', required: false })
    typeKey: string;

    @ApiModelProperty({ type: SectionDTO, isArray: true, description: 'sections relationship' })
    sections: SectionDTO[];

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}