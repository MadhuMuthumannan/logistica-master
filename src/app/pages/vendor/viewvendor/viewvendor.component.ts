import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../../services/vendor.service';
@Component({
  selector: 'app-viewvendor',
  templateUrl: './viewvendor.component.html',
  styleUrls: ['./viewvendor.component.scss'],
  providers: [VendorService],
})
export class ViewvendorComponent implements OnInit {
  settings = {
    columns: {
      name: {
        title: 'Name'
      },
      mobile_no: {
        title: 'Mob. No.'
      },
      email_id: {
        title: 'Email Id'
      },
      id:{
        title: 'Id'
      },
      gender:{
        title: 'Gender'
      },
      wallet:{
        title: 'Wallet Amt'
      },
      agency:{
        title: 'Agency'
      },
      city: {
        title: 'City' 
      },
      country: {
        title: 'country'
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

  data = [
    
    {
      id: '',
      name: '',
      mobile_no: '',
      email_id: '',
      gender: '',
      wallet: '',
      agency: '',
      city: '',
      country: '',
      status:'',
    }
  ];
  constructor(public VendorService:VendorService) { }

  
  ngOnInit() {  
    this.VendorService.getVendors().subscribe(user => { 
      this.data=user.response;
      
      user.response.forEach((responsesingle : any)=>{
          this.data.forEach((datasingle : any)=>{
            datasingle.country=responsesingle.country_id.title;
            datasingle.city=responsesingle.city_id.title;
            datasingle.status=responsesingle.status.title;
            datasingle.gender="Male";
            datasingle.wallet="$2000";
            datasingle.agency="Trinity group";
        });
      });
     
      
      console.log(this.data);
    });

  }
}
