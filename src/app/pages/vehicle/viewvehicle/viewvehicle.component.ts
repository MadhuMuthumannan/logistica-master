import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../services/vehicle.service';
@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.scss'],
  providers: [VehicleService],
})
export class ViewvehicleComponent implements OnInit {
  // settings = {
  //   columns: {
  //     id: {
  //       title: 'ID'
  //     },
  //     name: {
  //       title: 'Model'
  //     },
  //     type: {
  //       title: 'Type.'
  //     },
  //     vehiclenum: {
  //       title: 'Vehicle No.'
  //     },
  //     year: {
  //       title: 'Manufacture Year'
  //     },
  //     capacity: {
  //       title: 'Capacity'
  //     },
  //     driver: {
  //       title: 'Driver'
  //     },
  //     dimension: {
  //       title: 'Dimension'
  //     },
  //     status: {
  //       title: 'Status'
  //     }
  //   },
  //   pager : {
  //     perPage: 12
  //   },
  //   width:"20px, 8px,20px,15px,15px,15px,15px,10px "
  // };

  data: any= [];
  constructor(public VehicleService:VehicleService) { }

  ngOnInit() {  
    this.VehicleService.getVehicles().subscribe(vehiclelist => { 
      this.data=vehiclelist.response;
      console.log(this.data);
      vehiclelist.response.forEach((responsesingle : any)=>{
        this.data.forEach((datasingle : any)=>{
          if(responsesingle.helper_availability=="1"){
            datasingle.helperAvailability = "Available";
          }
          else{
            datasingle.helperAvailability = "Unavailable";
          }
      });
    });
    });

  }

}
