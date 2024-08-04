/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { CandidateAnswer } from './candidate-answer.entity';
import { Candidate } from './candidate.entity';

/**
 * The test entity.\n@author A true hipster
 */
@Entity('candidate_test', {
    orderBy: {
        createdDate: "DESC"
    }
})
export class CandidateTest extends BaseEntity {
    /**
     * testCompletionDate
     */
    @Column({ type: 'date', name: 'test_completion_date', nullable: true })
    testCompletionDate: any;

    /**
     * testScore
     */
    @Column({ type: 'integer', name: 'test_score', nullable: true })
    testScore: number;

    /**
     * testScheduledDate
     */
    @Column({ type: 'date', name: 'test_scheduled_date', nullable: true })
    testScheduledDate: any;

    /**
     * questionsAttempted
     */
    @Column({ name: 'questions_attempted', nullable: true })
    questionsAttempted: number;

    @Column({ type: 'char', name: 'question_type', nullable: true })
    questionType: string;

    /**
     * remainingTime
     */
    @Column({ name: 'remaining_time', nullable: true })
    remainingTime: number;

     /**
     * remainingTime
     */
    @Column({ name: 'active', nullable: false, default: true })
    active: boolean;

    /**
     * testStartDateTime
     */
    @Column({ type: 'datetime', name: 'test_start_date_time', nullable: true })
    testStartDateTime: any;

    /**
     * testEndDateTime
     */
    @Column({ type: 'datetime', name: 'test_end_date_time', nullable: true })
    testEndDateTime: any;

    @Column({ name: 'test_started', nullable: true, default: false })
    testStarted: boolean;

    @Column({ name: 'test_completed', nullable: true, default: false })
    testCompleted: boolean;


    @OneToMany((type) => CandidateAnswer, (candidateAnswer: CandidateAnswer) => candidateAnswer.candidateTest,  { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    candidateAnswers: CandidateAnswer[];

    @ManyToOne((type) => Candidate, (candidate:Candidate) => candidate.candidateTests)
    candidate: Candidate;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
