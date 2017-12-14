import { Injectable } from '@angular/core';
import { Subadmin } from '../pages/subadmin/subadmin';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Response } from '@angular/http/src/static_response';
@Injectable()
export class SubadminService {
  newSubadmin(subadmin:Subadmin){
    //alert("on sumbit clicked");
    console.log("Vehicle values are:");
    console.log(subadmin);
    // let dummysubadmin = {
// 	"name" : "rajaram",
// 	"email" : "raja16@gmail.com",
// 	"password" : "123456"
// }
    // this.http
    // .post('http://thelogistica.in:4000/subadmin', dummysubadmin, {})
    // .subscribe();
  }
  constructor(public http: HttpClient) { }
  getSubadmins(): Observable<any>{
    let args = {
      "search" : "",
      "start" : "0",
      "count" : "10"
    }
    
    return this.http.post('http://thelogistica.in:4000/getsubadmin', args)
      .map((vehile: Response) => vehile)
  }
}
