import { PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ nullable: true })
    createdBy?: string;
    @CreateDateColumn({ type: 'datetime'})
    createdDate?: Date;
    @Column({ nullable: true })
    lastModifiedBy?: string;
    @CreateDateColumn({ type: 'datetime'})
    lastModifiedDate?: Date;
    
    
}
