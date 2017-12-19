import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../services/vehicle.service';
@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.scss'],
  providers: [VehicleService],
})
export class ViewvehicleComponent implements OnInit {
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Model'
      },
      type: {
        title: 'Type.'
      },
      vehiclenum: {
        title: 'Vehicle No.'
      },
      year: {
        title: 'Manufacture Year'
      },
      capacity: {
        title: 'Capacity'
      },
      driver: {
        title: 'Driver'
      },
      dimension: {
        title: 'Dimension'
      },
      status: {
        title: 'Status'
      }
    },
    pager : {
      perPage: 12
    },
    width:"20px, 8px,20px,15px,15px,15px,15px,10px "
  };

  data = [];
  constructor(public VehicleService:VehicleService) { }

  ngOnInit() {  
    this.VehicleService.getVehicles().subscribe(user => { 
      this.data=user.response;
      console.log(this.data);
      user.response.forEach((responsesingle : any)=>{
        this.data.forEach((datasingle : any)=>{
          datasingle.capacity=responsesingle.capacity;
          datasingle.dimension=responsesingle.dimension;
          datasingle.status=responsesingle.status.title;
          datasingle.id=responsesingle.id;
          datasingle.name=responsesingle.name;
          datasingle.type="Truck";
          datasingle.driver="Driver1";
      });
    });
    });

  }

}
