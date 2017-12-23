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
  public title : string;
  public ifImage : boolean;
  private data:any = {
    "name":'',
    "status":'Active',
    "dimension":'',
    "capacity":'',
    "id": ''
  }
  private error : any ={
    "name":false,
    "status":false,
    "dimension":false,
    "capacity":false,
  }
  addVehicleType(){
    console.log("addVehicleType function called in component");
    console.log(this.data); 
    //this.VehicleService.newVehicle(this.data); 
    this.VehicleService.newVehicleType(this.data).subscribe(vehicleType => { 
      console.log(vehicleType);            
    });
  }


  constructor(public VehicleService:VehicleService,public router:Router ,public route: ActivatedRoute) { }
  
  
  ifChecked(){
    if(this.data.status==true){
      this.data.status="1";
    }
    else{
      this.data.status="0";
    }
  }
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
      this.VehicleService.newVehicleType(this.data);
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
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      if(id){
        console.log(id)
      }      
      this.title = id ? 'Edit Vehicle' : 'New Vehicle';

      if (!id)
        return;
      else{
        this.ifImage = true;
        console.log("this is edit vehicletype page");
        this.VehicleService.getVehicleType(id).subscribe(vehicletype => { 
          console.log(vehicletype);      
          this.data=vehicletype;  
        });
      }
        
      // this.VehicleService.getVehicle(this.id)
      //   .subscribe(
      //     vehicle =>  vehicle,
      //     response => {
      //       if (response.status == 404) {
      //         this.router.navigate(['vehicle/viewvehicle']);
      //       }
      //     });
    });

  // ngAfterViewInit() {
  //   (<any>$('.date-own') ).datepicker({
  //     minViewMode: 2,
  //     format: 'yyyy'
  //   });
  //}
 
}

}
