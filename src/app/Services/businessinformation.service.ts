import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import {AppSettings} from '../appSettings';

@Injectable()
export class BusinessinformationService {

  constructor(private _http:Http) { }
  dataUrl:string = AppSettings.API_ENDPOINT+"getMockIndustryProfessionDetails";
 // dataUrl:string = "https://api.myjson.com/bins/fe0kr";
 getAccountUrl:string = AppSettings.API_ENDPOINT+"getAccount";
 getAvailableProducts:string = AppSettings.API_ENDPOINT+"getAvailableProducts";
 getCompanyDetails:string = AppSettings.API_ENDPOINT+"getMockCompanyDetail";
 getIndustry:string= AppSettings.API_ENDPOINT+"industrytype";

 getPropertyOptionalDeductibleTermsUrl: string = AppSettings.API_ENDPOINT + "getPropertyOptionalDeductibleTerms";
  getLiabilityDeductibleTypesUrl: string = AppSettings.API_ENDPOINT + "getLiabilityDeductibleTypes";
  getLiabilityDeductiblesUrl: string = AppSettings.API_ENDPOINT + "getLiabilityDeductibles";
  getLiabilityLimitOccurrenceTermsUrl: string = AppSettings.API_ENDPOINT + "getLiabilityLimitOccurrenceTerms";
  getMockClaimHistoryUrl: string = AppSettings.API_ENDPOINT + "getMockClaimHistory";
  
  

 GetAccountDetails(data){

  let url = this.getAccountUrl;    
    return this._http.post(url, data)
      .catch(this.handleError);
  }

  GetIndustryProfessionDetails(){

	let url = this.dataUrl;    
    return this._http.get(url)
      .catch(this.handleError);
  }

  GetAvailableProducts(){

    let url = this.getAvailableProducts;    
      return this._http.get(url)
        .catch(this.handleError);
    }

   GetCompanyDetails(data){
     let url = this.getCompanyDetails;    
     return this._http.post(url, data)
       .catch(this.handleError);
  }

  
  GetIndustry(){
    let url = this.getIndustry;    
    return this._http.get(url)
      .catch(this.handleError);
 }
  
handleError(error: Response) {
    
    console.log(error);
    return Observable.throw(error);
  }


}
