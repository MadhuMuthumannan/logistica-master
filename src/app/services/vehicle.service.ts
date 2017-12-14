import { Injectable } from '@angular/core';
import { Vehicle } from '../pages/vehicle/vehicle';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Response } from '@angular/http/src/static_response';
@Injectable()
export class VehicleService {
  newVehicle(vehile:Vehicle){
    //alert("on sumbit clicked");
    console.log("Vehicle values are:");
    console.log(vehile);
    // let dummyvehicle = {
//     "name" : "Truck",
//     "capacity" : "8 Ton",
//     "dimension" : "200"
// }
    // this.http
    // .post('http://thelogistica.in:4200/vehicletype', dummyvehicle, {})
    // .subscribe();
  }
  constructor(public http: HttpClient) { }
  getVehicles(): Observable<any>{
    
    return this.http.get('http://thelogistica.in:4000/vehicletype')
      .map((vehile: Response) => vehile)
  }
}
