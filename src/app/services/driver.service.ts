import { Injectable } from '@angular/core';
import { Driver } from '../pages/driver/driver';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class DriverService {
  newDriver(driver:Driver){
    //alert("on sumbit clicked");
    console.log("Vendor values are:");
    console.log(driver);
    // let dummyvendor = {      
    //     "name" : "rajaram",
    //     "email_id" : "rajkjfna1156@gmail.com",
    //     "phone" : "1235789rnj0",
    //     "password" : "123456",
    //     "uuid" : "23456",
    //     "system_info" : "web"       
    // }
    // this.http
    // .post('http://thelogistica.in:4200/vendor', vendor, {})
    // .subscribe();
  }
  constructor(public http: HttpClient) { }
  getDrivers(): Observable<any>{
    let data = {
          "start" :"0",
          "count" : "10",
          "search" : ""
        }
    return this.http.post('http://thelogistica.in:4000/driverlist', data)
      .map((driver: Response) => driver)
  }
}
