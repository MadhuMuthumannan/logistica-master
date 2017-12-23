import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../services/vehicle.service';
import { Vehicle } from '../vehicle';
import {IMyDpOptions} from 'mydatepicker';
import { MyDatePickerModule } from 'mydatepicker';
import * as $ from 'jquery';
import { ExtraOptions, RouterModule, Routes, Params, Router, ActivatedRoute} from '@angular/router';
import { Route } from '@angular/router/src/config';
@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.scss'],
  providers: [VehicleService,MyDatePickerModule]
})
export class AddvehicleComponent implements OnInit {
  private myDatePickerOptions1: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy',
    yearSelector: true,
  }
  public b64: any;
  public id: string;
  public title: string;
  public ifImage: boolean;
  private vehicleType: any = [
    {
      label: "Lorry",
      value: "1"
    },
    {
      label: "Truck",
      value: "2"
    },
    {
      label: "Tempo",
      value: "3"
    },
    {
      label: "Mini Elephant",
      value: "4"
    },
  ];
  private driver: any = [
    {
      label: "Driver1",
      value: "Driver1"
    },
    {
      label: "Driver2",
      value: "Driver2"
    },
    {
      label: "Driver3",
      value: "Driver3"
    },
    {
      label: "Driver4",
      value: "Driver4"
    },
  ];
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy',
};

  private data: any = {
    "name": '',
    "model": '',
    "type": '',
    "number": '',
    "manufacture_year": '',
    "capacity": '',
    "helper_availability": '',
    "driver": '',
    "image": '',
    "rc_book": '',
    "status": '',
    "uuid": "2468789",
    "system_info": "bhjbc"
  }
  private error: any = {
    "name": false,
    "model": false,
    "type": false,
    "number": false,
    "manufacture_year": false,
    "capacity": false,
    "helper_availability": false,
    "driver": false,
    "image": false,
    "rc_book": false,
    "status": false,
    "uuid": false,
    "system_info": false,
  }
  
  changeListener($event): void {
    this.readThis($event.target);
  }
  

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    //console.log(file);
    myReader.onloadend = (e) => {
      this.data.image_flag = true;
      this.b64 = myReader.result;
      //console.log(this.b64);
      if(this.b64){
        this.data.image_flag = true;
      }
      else{
        this.data.image_flag = false;
      }
      this.data.image = this.b64;
    }
    myReader.readAsDataURL(file);

  }

  changeListener1($event): void {
    this.readThis1($event.target);
  }

  readThis1(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    //console.log(file);
    myReader.onloadend = (e) => {
      this.data.rc_flag = true;
      this.b64 = myReader.result;
      //console.log(this.b64);
      if(this.b64){
        this.data.rc_flag = true;
      }
      else{
        this.data.rc_flag = false;
      }
      this.data.rc_book_document = this.b64;
    }
    myReader.readAsDataURL(file);

  }

  ifChecked(){
    if(this.data.status == true){
      this.data.status = 1;
    }
    else{
      this.data.status = 0;
    }
  }
  addVehicle(){
    console.log("addVehicle function called in component");
    this.data.id = "";
    this.data.manufacture_year = this.data.manufacture_year.formatted;
    this.data.vehicle_pack = "1";
    this.data.driver_id = "1";
    console.log(this.data);
    //this.VehicleService.newVehicle(this.data); 
    this.VehicleService.newVehicle(this.data).subscribe(vehicle => { 
      console.log(vehicle);            
    });
  }



  checkValidation() {
    this.error.name = false;
    this.error.model = false;
    this.error.type = false;
    this.error.number = false;
    this.error.manufacture_year = false;
    this.error.capacity = false;
    this.error.helper_availability = false;
    this.error.status = false;
    this.error.driver = false;
    var flag = true;
    this.data.name = this.data.name.trim();
    //checking if name has minimum characters
    if (this.data.name == null || this.data.name == "") {
      this.error.name = true;
      flag = false;
    }
    if (!(/^.{3,}$/.test(this.data.name))) {
      this.error.name = true;
      flag = false;
    }
    if (this.data.model == null || this.data.model == "") {
      this.error.model = true;
      flag = false;
    }
    if (this.data.type == null || this.data.type == "") {
      this.error.type = true;
      flag = false;
    }
    if (this.data.number == null || this.data.number == "") {
      this.error.number = true;
      flag = false;
    }
    if (this.data.manufacture_year == null || this.data.manufacture_year == "") {
      this.error.manufacture_year = true;
      flag = false;
    }
    if (this.data.capacity == null || this.data.capacity == "") {
      this.error.capacity = true;
      flag = false;
    }
    if (this.data.helper_availability == null || this.data.helper_availability == "") {
      this.error.helper_availability = true;
      flag = false;
    }
    if (this.data.status == null || this.data.status == "") {
      this.error.status = true;
      flag = false;
    }
    if (this.data.driver == null || this.data.driver == "") {
      this.error.driver = true;
      flag = false;
    }
    console.log(this.error);
    return flag;
  }
 
  constructor(public VehicleService: VehicleService,public router:Router ,public route: ActivatedRoute) { }
  // onSubmit({ value, valid }: { value: Vehicle, valid: boolean }) {
  //   this.VehicleService.newVehicle(value);
  // }

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
        console.log("this is edit vehicle page");
        this.VehicleService.getVehicle(id).subscribe(vehicle => { 
          console.log(vehicle);      
          this.data=vehicle;  
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