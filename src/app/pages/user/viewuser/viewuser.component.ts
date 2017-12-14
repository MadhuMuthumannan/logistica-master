import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { RouterLink } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss'],
  providers: [UserService],
})
export class ViewuserComponent implements OnInit {
  public dateofbirth:any;
  editUser(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var userId = target.attributes.id;
    console.log(userId);
  }

  settings = {
    columns: {
      name: {
        title: 'Name'
      },
      mobile: {
        title: 'Mob. No.'
      },
      email: {
        title: 'Email Id'
      },
      city: {
        title: 'City'
      },
      country: {
        title: 'Country'
      },
      status: {
        title: 'Status'
      },
      gender:{
        title: 'Gender'
      }
    },
    pager : {
      perPage: 12
    },
    width:"20px, 8px,25px,25px,15px,15px,15px,10px,10px "
  };
  data=[];
  // data = [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     mobile: "Bret",
  //     email: "Sincere@april.biz",
  //     password: "*********",
  //     facebook: "asfja@fb.com",
  //     google: "adfh@gmail.com",
  //     status: 'active'
  //   }
  // ];

  constructor(public UserService:UserService, private router : Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {  
    this.UserService.getUsers().subscribe(user => { 
      console.log("Get user service called on component side");
      this.data=user.response;
      //this.data=user.response;
      
    //   for(let i:number=0;i<=user.response.length;i++){
    //     let x = user.response[i].dob;
    //     var date = new Date(Math.round(Number(x)));
    //     var formattedDate = date.getUTCDate() + '-' + (date.getUTCMonth() + 1)+ '-' + date.getUTCFullYear();
    //     //console.log(formattedDate);
    //     this.data.dateofbirth=formattedDate;
    // }
      console.log(user.response);
    //   user.response.forEach((responsesingle : any)=>{
    //     this.data.forEach((datasingle : any)=>{
    //       datasingle.country=responsesingle.country_id.title;
    //       datasingle.city=responsesingle.city_id.title;
    //       datasingle.status=responsesingle.status.title;
    //       switch(responsesingle.gender) {
    //         case 0:
    //             datasingle.gender="Male";
    //             break;
    //         case 1:
    //             datasingle.gender="Female";
    //             break;
    //         case 3:
    //             datasingle.gender="Others";
    //             break;
    //         default:
    //               datasingle.gender="Male";
    //     }
          
    //   });
    // });
      //console.log("country: "+user.response[0].city_id.country_id.title);
      //console.log("city: "+user.response[0].city_id.country_id.title);
    });

   

  }
  
}
