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
  newVehicle(vehicle: Vehicle): Observable<any>{    
    console.log("add vehicle service called: ");
    console.log(vehicle);
    return this.http.post('http://thelogistica.in:4000/vehicle',vehicle)
      .map((vehcile: Response) => vehicle)
  }

  newVehicleType(vehicle: Vehicle): Observable<any>{    
    console.log("add vehicletype service called: ");
    console.log(vehicle);
    return this.http.post('http://thelogistica.in:4000/vehicletype',vehicle)
      .map((vehcile: Response) => vehcile)
  }
  getVehicle(id: any): Observable<any>{
    console.log("Get vehicled service called"); 
    let query = "?id="+id;   
    console.log('http://thelogistica.in:4000/vehicle'+query);    
    return this.http.get('http://thelogistica.in:4000/vehicle'+query)
      .map((vehicle: Response) => vehicle)

  }

  getVehicleType(id: any): Observable<any>{    
    console.log("view vehicletypebyid service called: ");
    return this.http.post('http://thelogistica.in:4000/vehicletype',id)
      .map((vehciletype: Response) => vehciletype)
  }

  getVehicleTypes(): Observable<any>{    
    console.log("view vehicletype service called: ");
    return this.http.get('http://thelogistica.in:4000/vehicletype')
      .map((vehciletypes: Response) => vehciletypes)
  }

  constructor(public http: HttpClient) { }
  getVehicles(): Observable<any>{
    let data = {
      "start" : "",
      "count" : "",
      "search" : ""
    }
    return this.http.post('http://thelogistica.in:4000/vehiclelist',data)
      .map((vehile: Response) => vehile)
  }
}
