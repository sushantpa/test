/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseDTO } from './base.dto';


/**
 * A Candidate DTO object.
 */
export class CandidateDTO extends BaseDTO {
    /**
     * firstName
     */
    @ApiModelProperty({ description: 'firstName', required: true })
    @IsString()
    firstName: string;

    /**
     * fullName
     */
    @ApiModelProperty({ description: 'lastName', required: true })
    @IsString()
    lastName: string;

    /**
     * email
     */
    @ApiModelProperty({ description: 'email', required: true })
    @IsEmail()
    email: string;
    
    /**
     * email
     */
    @ApiModelProperty({ description: 'ZohoRecruitId' })
    @IsOptional()
    @IsString()
    zohoRecruitId: string;

}
