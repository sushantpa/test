/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { Question } from './question.entity';
import { CandidateTest } from './candidate-test.entity';

/**
 * The CandidateAnswer entity.\n@author A true hipster
 */
@Entity('candidate_answer')
export class CandidateAnswer extends BaseEntity {
    /**
     * fieldName
     */
    @Column({ name: 'answer', nullable: true })
    answer: string;

    @ManyToOne((type) => Question)
    @JoinColumn()
    question: Question;

    @ManyToOne((type) => CandidateTest, (candidateTest: CandidateTest) => candidateTest.candidateAnswers)
    candidateTest: CandidateTest;

    @Column()
    questionId: string

    @Column()
    candidateTestId: string

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
