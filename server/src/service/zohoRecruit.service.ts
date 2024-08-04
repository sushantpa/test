import {  Injectable } from "@nestjs/common";
import { HttpService } from '@nestjs/axios'


@Injectable()
export class ZohoRecruitService {
    auth_url = `https://accounts.zoho.com/oauth/v2/token?refresh_token=${process.env.refresh_token}&client_id=${process.env.client_id}&client_secret=${process.env.client_secret}&grant_type=refresh_token`;
    zoho_recruit_api = 'https://recruit.zoho.com/recruit/v2'
  constructor(private httpService: HttpService) {}

async getAuthToken() {
    return await this.httpService.post(this.auth_url).toPromise();
}
    
async updateCandidateRecord(zohoRecruitId, update) {
    const url = `${this.zoho_recruit_api}/Candidates/${zohoRecruitId}`
    const { data: { access_token } } = await this.getAuthToken();
    return await this.httpService.put(url, update, { headers: { 'Content-Type': 'application/json', 'Authorization': 'Zoho-oauthtoken ' + access_token } }).toPromise()  
  }
}