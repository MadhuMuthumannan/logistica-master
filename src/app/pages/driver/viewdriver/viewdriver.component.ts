import { Component, OnInit } from '@angular/core';
import {DriverService } from '../../../services/driver.service';
@Component({
  selector: 'app-viewdriver',
  templateUrl: './viewdriver.component.html',
  styleUrls: ['./viewdriver.component.scss'],
  providers: [DriverService],
})
export class ViewdriverComponent implements OnInit {
  // settings = {
  //   columns: {
  //     id: {
  //       title: 'ID'
  //     },
  //     name: {
  //       title: 'Name'
  //     },
  //     mobile: {
  //       title: 'Mob. No.'
  //     },
  //     email: {
  //       title: 'Email Id'
  //     },
  //     gender:{
  //       title: 'Gender'
  //     },
  //     city:{
  //       title: 'City'
  //     },
  //     country:{
  //       title: 'Country'
  //     },
  //     driver_visibility: {
  //       title: 'Driver Visibility'
  //     },
  //     current_location: {
  //       title: 'Current Loctn'
  //     }
  //   },
  //   pager : {
  //     perPage: 12
  //   },
  //   width:"20px, 8px,20px,15px,15px,15px,15px,10px "
  // };

  data = [
    // {     
    
    // ... list of items
    
    // {
    //   id: 333,
    //   name: "Angelica Ramos",
    //   mobile: "3215478952",
    //   email: "Sincere@april.biz",
    //   password: "*********",
    //   facebook: "asfja@fb.com",
    //   google: "adfh@gmail.com",
    //   status: 'active'
    // }
  ];
  constructor(public DriverService:DriverService) { }

  ngOnInit() {  
    this.DriverService.getDrivers().subscribe(driver => { 
      console.log(driver.response);
      this.data=driver.response;
      driver.response.forEach((responsesingle : any)=>{
        this.data.forEach((datasingle : any)=>{
          datasingle.country=responsesingle.city_id.country_id.title;
          datasingle.city=responsesingle.city_id.title;
          datasingle.status=responsesingle.city_id.status.title;
          switch(responsesingle.gender) {
            case 0:
                datasingle.gender="Male";
                break;
            case 1:
                datasingle.gender="Female";
                break;
            case 3:
                datasingle.gender="Others";
                break;
            default:
                  datasingle.gender="Male";
        }
          if(responsesingle.driver_visibility==0){
            datasingle.driver_visibility="Visible";
          }
          else{
            datasingle.driver_visibility="Invisible";
          }
          //datasingle.wallet="$2000";
          //datasingle.agency="Trinity group";
      });
    });
      //console.log(this.data); 
    });

  }

}
