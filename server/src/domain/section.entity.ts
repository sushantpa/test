/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { QuestionType } from './question-type.entity';

import { Question } from './question.entity';

/**
 * The Section entity.\n@author A true hipster
 */
@Entity('section')
export class Section extends BaseEntity {
    /**
     * fieldName
     */
    @Column({ type: 'longtext', name: 'section_question', nullable: true,  })
    sectionQuestion: string;
    
    /**
     * sectionNumberHeading
     */
    @Column({ name: 'section_number_heading', nullable: true })
    sectionNumberHeading: string;

    /**
     * sectionNumber
     */
    @Column({ type: 'integer', name: 'section_number', nullable: true })
    sectionNumber: number;

    @OneToMany(() => Question, (question: Question) => question.section, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    questions: Question[];

    @ManyToOne(() => QuestionType, (questionType : QuestionType) => questionType.sections)
    questionType: QuestionType;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
