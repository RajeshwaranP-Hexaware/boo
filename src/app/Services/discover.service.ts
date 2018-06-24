import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import {AppSettings} from '../appSettings';

@Injectable()
export class DiscoverService {

  constructor(private _http:Http) { }
  dataUrl:string = AppSettings.API_ENDPOINT + "getDiscoverAddress";
 // dataUrl:string = "https://api.myjson.com/bins/fe0kr";
 	
   
  GetClientDetailsLocation(data){

	let url = this.dataUrl;    
    return this._http.post(url, data)
      .catch(this.handleError);
  }

     
  handleError(error: Response) {
    
    console.log(error);
    return Observable.throw(error);
  }

}
