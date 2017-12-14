import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../services/vehicle.service';
import { Vehicle } from '../vehicle';
@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.scss'],
  providers: [VehicleService]
})
export class AddvehicleComponent implements OnInit {

  constructor(public VehicleService:VehicleService) { }
  onSubmit({value, valid}:{value:Vehicle, valid:boolean}){    
    this.VehicleService.newVehicle(value);      
}
  ngOnInit() {
  }

}
