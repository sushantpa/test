/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable, CreateDateColumn, AfterUpdate, AfterInsert, AfterLoad, BeforeInsert, BeforeUpdate } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { CandidateTest } from './candidate-test.entity';

import { User } from './user.entity';

/**
 * The candidate entity.\n@author A true hipster
 */
@Entity('candidate')
export class Candidate extends BaseEntity {
    /**
     * firstName
     */
    @Column({  name: 'first_name', nullable: false })
    firstName: string;

    /**
     * fullName
     */
    @Column({  name: 'last_name', nullable: false })
    lastName: string;

    /**
     * email
     */
    @Column({  name: 'email', nullable: false })
    email: string;
    
    /**
     * firstName
     */
    @Column({  name: 'full_name', nullable: false })
    fullName: string;
    /**
     * testScore
     */
    @Column({ type: 'integer', name: 'latest_test_score', default: 0 })
    latestTestScore: number;

    /**
     * testScheduledDate
     */
    @Column({ type: 'date', name: 'last_test_date', nullable: true , default: null})
    lastTestDate: any;

    /**
     * registrationDate
     */
    @Column({ type: 'date', name: 'registration_date', nullable: true })
    @CreateDateColumn({ type: 'datetime'})
    registrationDate: any;

    /**
     * registrationCount
     */
    @Column({ type: 'integer', name: 'registration_count', nullable: true, default : 1 })
    registrationCount: number;

    /**
     * testCount
     */
    @Column({ type: 'integer', name: 'test_taken_count', nullable: true, default: 0 })
    testTakenCount: number;

    /**
     * active
     */
    @Column({ type: 'boolean', name: 'can_take_test', nullable: true, default : true })
    canTakeTest: boolean;

    @Column({  name: 'zohoRecruitId', nullable: true })
    zohoRecruitId: string;

    @OneToOne((type) => User, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User;

    @OneToMany(() => CandidateTest, (candidateTests: CandidateTest) => candidateTests.candidate,  { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    candidateTests: CandidateTest[];

    @BeforeInsert()
    updateFullName() {
        this.fullName = `${this.firstName} ${this.lastName}`;
    };


}
