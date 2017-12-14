import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../../services/vendor.service';
import { Vendor } from '../vendor';
import { UUID } from 'angular2-uuid';
@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.scss'],
  providers: [VendorService, UUID]
})
export class AddvendorComponent implements OnInit {
  vendor:Vendor = {
    name:'',
    mobile:'',
    email:'',
    password:'',
    agency:'',
    pan:'',
    gst:'',
    bank:'',
    vat:'',
    address:'',
    status:''
  }
  constructor(public VendorService:VendorService, private uuid: UUID) { 
    
  }
  
  onSubmit({value, valid}:{value:Vendor, valid:boolean}){    
    this.VendorService.newVendor(value);      
}

  ngOnInit() {
  }

}
