/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { Section } from './section.entity';

/**
 * The questionType entity.\n
 * @author A true hipster
 */
@Entity('question_type')
export class QuestionType extends BaseEntity {
    /**
     * fieldName
     */
    @Column({ name: 'type_key', nullable: true })
    typeKey: string;

    @OneToMany((type) => Section, (section: Section) => section.questionType, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    sections: Section[];

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}