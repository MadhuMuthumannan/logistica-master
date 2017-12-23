import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../services/vehicle.service';

@Component({
  selector: 'app-viewvehicletype',
  templateUrl: './viewvehicletype.component.html',
  styleUrls: ['./viewvehicletype.component.scss'],
  providers:[VehicleService]
})
export class ViewvehicletypeComponent implements OnInit {
public data: any;
  constructor(public VehicleService: VehicleService) { }

  ngOnInit() {
    this.VehicleService.getVehicleTypes().subscribe(vehicletypes => { 
      console.log(vehicletypes.response);
      this.data=vehicletypes.response;
    });
  }

}
