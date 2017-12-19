import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../services/vehicle.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { RouterLink } from '@angular/router';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-vehicletype',
  templateUrl: './vehicletype.component.html',
  styleUrls: ['./vehicletype.component.scss'],
  providers: [VehicleService],
})
export class VehicletypeComponent implements OnInit {
  private data:any = {
    "name":'',
    "status":'Active',
    "id":'',
    "dimension":'',
    "capacity":'',
    "uuid" : "2468789",
    "system_info" : "bhjbc"
  }
  private error : any ={
    "name":false,
    "status":false,
    "id":false,
    "dimension":false,
    "capacity":false,
    "uuid" : false,
    "system_info" :false
  }
  constructor(public VehicleService:VehicleService) { }
  
  vehicleType(){  
    console.log("add user function");
    console.log(this.data);
    if(this.checkValidation())
    {
      // this.data.id = "1";
      // this.data.name = "1";
      // this.data.capacity="Active";
      // this.data.dimension = "120 / 124";
      // this.data.status = "Active";
      console.log(this.data);
    }
       
    
  }

  checkValidation(){
    
  this.error.name = false;
  this.error.id = false;
  this.error.status = false;
  this.error.capacity = false;
  this.error.dimension = false;
  var flag = true;
  this.data.name = this.data.name.trim();
  //checking if name has minimum characters
  if(this.data.name == null || this.data.name == "" )
  {
    this.error.name = true;
    flag = false;
  }
  if(!(/^.{3,}$/.test(this.data.name)))
  {
    this.error.name = true;
    flag = false;
  }
  if(this.data.capacity == null || this.data.capacity == "")
  {
    this.error.capacity = true;
    flag = false;
  }
  
  
  if(this.data.status == null || this.data.status == "")
  {
    this.error.status = true;
    flag = false;
  }
  if(this.data.dimension == null || this.data.dimension == "")
  {
    this.error.dimension = true;
    flag = false;
  }
  console.log(this.error);
  return flag;
  }

  ngOnInit() {
  }

}
