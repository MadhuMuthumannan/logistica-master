import { Component, OnInit } from '@angular/core';
import { ExtraOptions, RouterModule, Routes, Params, Router, ActivatedRoute} from '@angular/router';
import { VendorService } from '../../../services/vendor.service';
@Component({
  selector: 'app-viewvendor',
  templateUrl: './viewvendor.component.html',
  styleUrls: ['./viewvendor.component.scss'],
  providers: [VendorService],
})
export class ViewvendorComponent implements OnInit {
  // settings = {
  //   columns: {
  //     name: {
  //       title: 'Name'
  //     },
  //     mobile_no: {
  //       title: 'Mob. No.'
  //     },
  //     email_id: {
  //       title: 'Email Id'
  //     },
  //     id:{
  //       title: 'Id'
  //     },
  //     gender:{
  //       title: 'Gender'
  //     },
  //     wallet:{
  //       title: 'Wallet Amt'
  //     },
  //     agency:{
  //       title: 'Agency'
  //     },
  //     city: {
  //       title: 'City' 
  //     },
  //     country: {
  //       title: 'country'
  //     },
  //     status: {
  //       title: 'Status'
  //     }
  //   },
  //   pager : {
  //     perPage: 12
  //   },
  //   mode: 'external',
  //   width:"20px, 8px,20px,15px,15px,15px,15px,10px "
  // };
  // //mode = external;
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
  
  
  vendorEdit(){
    console.log(this);
    //this.router.navigate(['/editvendor/'+datas.id]);
  }
  constructor(public VendorService:VendorService,public router:Router ,public route: ActivatedRoute) { }

  onClick(event){
    console.log(event);
  }
  ngOnInit() {  
    this.VendorService.getVendors().subscribe(user => { 
      console.log(user.response);
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
