import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../../services/driver.service';
import { Driver } from '../driver';
@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.scss'],
  providers: [DriverService]
})
export class AdddriverComponent implements OnInit {

  constructor(public DriverService:DriverService) { }
  onSubmit({value, valid}:{value:Driver, valid:boolean}){    
    this.DriverService.newDriver(value);      
}
  ngOnInit() {
  }

}
