/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { CandidateAnswer } from './candidate-answer.entity';
import { Section } from './section.entity';

/**
 * The Question entity.\n@author A true hipster
 */
@Entity('question')
export class Question extends BaseEntity {
    /**
     * question
     */
    @Column({ name: 'question', nullable: true })
    question: string;

    /**
     * questionNumber
     */
    @Column({ type: 'integer', name: 'question_number', nullable: true })
    questionNumber: number;

    /**
     * a
     */
    @Column({ name: 'a', nullable: true })
    a: string;

    /**
     * b
     */
    @Column({ name: 'b', nullable: true })
    b: string;

    /**
     * c
     */
    @Column({ name: 'c', nullable: true })
    c: string;

    /**
     * a
     */
    @Column({ name: 'd', nullable: true })
    d: string;

    /**
     * a
     */
    @Column({ name: 'e', nullable: true })
    e: string;

    /**
     * a
     */
    @Column({ name: 'answer', nullable: true,  select: false  })
    answer: string;

    @OneToMany((type) => CandidateAnswer, candidateAnswer => candidateAnswer.question )
    candidateAnswer: CandidateAnswer[];

    @ManyToOne(() => Section, (section: Section) => section.questions )
    section: Section;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
