import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { AppSettings } from '../appSettings';

@Injectable()
export class CoverageService {

  constructor(private _http: Http) { }
  getPropertyOptionalDeductibleTermsUrl: string = AppSettings.API_ENDPOINT + "getPropertyOptionalDeductibleTerms";
  getLiabilityDeductibleTypesUrl: string = AppSettings.API_ENDPOINT + "getLiabilityDeductibleTypes";
  getLiabilityDeductiblesUrl: string = AppSettings.API_ENDPOINT + "getLiabilityDeductibles";
  getLiabilityLimitOccurrenceTermsUrl: string = AppSettings.API_ENDPOINT + "getLiabilityLimitOccurrenceTerms";
  getMockClaimHistoryUrl: string = AppSettings.API_ENDPOINT + "getMockClaimHistory";
  uploadPolicyDocUrl: string = AppSettings.API_ENDPOINT + "uploadPolicyDoc";
  quotesubmissionUrl: string = AppSettings.API_ENDPOINT + "quotesubmission";
  

  Quotesubmission(data) {
    let url = this.quotesubmissionUrl;
    return this._http.post(url, data)
      .catch(this.handleError);
  }
  
  GetMockClaimHistory(data) {
    let url = this.getMockClaimHistoryUrl;
    return this._http.post(url, data)
      .catch(this.handleError);
  }
  GetPropertyOptionalDeductibleTerms() {
    let url = this.getPropertyOptionalDeductibleTermsUrl;
    return this._http.get(url)
      .catch(this.handleError);
  }
  GetLiabilityDeductibleTypes() {
    let url = this.getLiabilityDeductibleTypesUrl;
    return this._http.get(url)
      .catch(this.handleError);
  }
  GetLiabilityDeductibles() {
    let url = this.getLiabilityDeductiblesUrl;
    return this._http.get(url)
      .catch(this.handleError);
  }
  
  GetLiabilityLimitOccurrenceTerms() {
    let url = this.getLiabilityLimitOccurrenceTermsUrl;
    return this._http.get(url)
      .catch(this.handleError);
  }

  UploadPolicyDoc(data){
    let url = this.uploadPolicyDocUrl;    
    return this._http.post(url, data)
      .catch(this.handleError);
 }
 
  handleError(error: Response) {
    
    console.log(error);
    return Observable.throw(error);
  }

}
