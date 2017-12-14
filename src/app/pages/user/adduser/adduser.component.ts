import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from './user';
import { UUID } from 'angular2-uuid';
import {IMyDpOptions} from 'mydatepicker';
import { MyDatePickerModule } from 'mydatepicker';
import {Md5} from 'ts-md5/dist/md5';
//import { FlashMessagesService } from 'angular2-flash-messages';
this.uuid = UUID.UUID();

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
  providers: [UserService, UUID,MyDatePickerModule]
})
export class AdduserComponent implements OnInit {
   
  private data:any = {
    "name":'',
    "gender":'1',
    "phone":'',
    "password":'',
    "email":'',
    "dob":'',
    "city":'1',
    "country":'1',
    "uuid" : "2468789",
    "system_info" : "bhjbc"
  }
  private error : any ={
    "name":false,
    "gender":false,
    "phone":false,
    "password":false,
    "email":false, 
    "dob":false,
    "city":false,
    "country":false,
  }

 private cityList :any = []
 private countryList :any = []
 
  // options=[
  //   {
  //   value: "city1",
  //   label:"city1"
  //   },
  //   {
  //     value: "city22",
  //     label:"city22"
  //     },
  //     {
  //       value: "city134",
  //       label:"citcity134y245"
  //       },
  //       {
  //         value: "city245",
  //         label:"city245"
  //         },
  // ];

// Initialized to specific date (09.10.2018).
public model: any = {  };

  constructor(
    public UserService:UserService,
    private uuid: UUID,
    //private _flashMessagesService: FlashMessagesService
  ) {}

  addUser(){  
    console.log("add user function");
    console.log(this.data.status);
    if(this.checkValidation())
    {
      this.data.city = "1";
      this.data.country = "1";
      this.data.status="Active";
      this.data.dob = parseInt(this.data.dateofbirth.epoc);
      // console.log("dateofbirth:"+this.data.dob);
      // console.log("dateofbirth.epoc:"+this.data.dateofbirth.epoc);
      // console.log(this.data);
      this.UserService.newUser(this.data); 
      //this._flashMessagesService.show('Success!', { cssClass: 'alert-success' } );   
      this.data=[];
    }
       
  }

  





  checkValidation(){
    
  this.error.name = false;
  this.error.gender = false;
  this.error.status = false;
  this.error.email = false;
  this.error.password = false;
  this.error.phone = false;
  this.error.country = false;
  this.error.city = false;
  this.error.dob = false;
  var flag = true;
  this.data.name = this.data.name.trim();
  //checking if name has minimum characters
  if(this.data.name == null || this.data.name == "" )
  {
    this.error.name = true;
    flag = false;
  }
  if(!(/^.{3,}$/.test(this.data.name)))
  {
    this.error.name = true;
    flag = false;
  }
  if(this.data.gender == null || this.data.gender == "")
  {
    this.error.gender = true;
    flag = false;
  }
  // validating email
  if(this.data.email == null || this.data.email == ""|| !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.data.email))
  {
    this.error.email = true;
    flag = false;
  }
  //checking to allow only number
  if(this.data.phone == null || this.data.phone == "" || !((/^\d{10}$/).test(this.data.phone)) || !(/^.{6,}$/.test(this.data.phone)))
  {
    this.error.phone = true;
    flag = false;
  }
  //password must contain atleast one character
  if(this.data.password == null || this.data.password == "" || !(/[a-z+]+[0-9+]+[&@!#+]+/).test(this.data.password))
  {
    this.error.password = true;
    flag = false;
  }
  if(this.data.gender == null || this.data.gender == "")
  {
    this.error.gender = true;
    flag = false;
  }
  if(this.data.city == null || this.data.city == "")
  {
    this.error.city = true;
    flag = false;
  }
  if(this.data.country == null || this.data.country == "")
  {
    this.error.country = true;
    flag = false;
  }
  console.log(this.error);
  return flag;
  }




  ngOnInit() {
    console.log(this.uuid);

    this.UserService.getUsers().subscribe(user => { 
      this.data=user.response;
      console.log(user.response);
      console.log("country: "+user.response[0].city_id.country_id.title);
      console.log("city: "+user.response[0].city_id.country_id.title);
    });

    
      this.UserService.getCityList().subscribe(city => { 
        let cityArray = [];
        city.response.forEach((single : any)=>{
            cityArray.push({"label" : single.title, "value" : single.id});
        });
        this.cityList = cityArray;
        // console.log(this.cityList);
        // console.log(this.cityList.response[0].title);
      });
        
      this.UserService.getCountryList().subscribe(country => { 
        let countryArray = [];
        country.response.forEach((single : any)=>{
            countryArray.push({"label" : single.title, "value" : single.id});
        });
        this.countryList = countryArray;
        // console.log(this.countryList);
        // console.log(this.countryList.response[0].title);
      });
  }

}
