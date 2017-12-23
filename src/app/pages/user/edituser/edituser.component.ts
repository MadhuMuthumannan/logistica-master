import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { UUID } from 'angular2-uuid';
import 'rxjs/add/operator/toPromise';
import { ExtraOptions, RouterModule, Routes, Params, Router, ActivatedRoute} from '@angular/router';
import {IMyDpOptions} from 'mydatepicker';
import { MyDatePickerModule } from 'mydatepicker';
import {Md5} from 'ts-md5/dist/md5';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss'],
  providers: [UserService, UUID,MyDatePickerModule],
})
export class EdituserComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    
};
//public model: any = { date: { year: 2018, month: 10, day: 9 } };
  public b64:any;
  private imageData:any = [];
  public currentAge:number;
  public currentAgeDate: number;
  public currentAgeMonth: number;
  public currentAgeYear: number;
  public id: string;
  public activeInactive: number;
  public data: any = {};
  changeListener($event) : void {
    this.readThis($event.target);
  }

 
 
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    console.log(file);
    myReader.onloadend = (e) => {
      this.b64 = myReader.result;
      //console.log(this.b64);
      this.imageData = {id: this.id, file: this.b64}
      this.UserService.updateUserImage(this.imageData).subscribe(image => { 
        //console.log(image);      
        this.data=image;
      });
    }
    myReader.readAsDataURL(file);  

  }

  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        //this.location = position.coords;
        console.log(position.coords); 
        //alert("Latitude: "+position.coords.latitude+"Longtitude: "+position.coords.longitude);         
      });
   }
  }

  
 
  country = [];
  city = [];
  ifChecked(event){
    if(event.target.checked){
      this.activeInactive = 1;
    }
    else{
      this.activeInactive = 0;
    }
     
  }

  updateUser(){
    console.log(this.data);
    //this.data.status = this.activeInactive;
    //   this.data[0].forEach((datasingle : any)=>{
    //     datasingle.status = this.activeInactive; 
    //  });

    // this.data.push({
    //   city : this.selectedCity,
    //   country: this.selectedCountry,
    //   status: this.activeInactive
    // });
    this.UserService.updateUser(this.data).subscribe(user => { 
        console.log(user);
    });
  }

  constructor(public UserService:UserService,  public router:Router ,public route: ActivatedRoute) { }
  public genderr:string='';
  public age:number=23;
  public wallet:number=2500;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.UserService.getUser(this.id).subscribe(user => { 
      console.log(user);      
      this.data=user;
       this.country.push({label :user.country_id.title,value:user.country_id.id});
       this.city.push({label :user.city_id.title,value:user.city_id.id});
       this.data.status= user.status.title;
      if(user.gender==0){
        this.genderr= "Male";
      }
      else{
        this.genderr= "Female";
      }
      var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
      d.setUTCSeconds(user.dob);
      var e = new Date();
      this.currentAge = Math.abs(e.getUTCFullYear() - d.getUTCFullYear());  
      this.currentAgeDate = Math.abs(d.getUTCDate());         
      this.currentAgeMonth = Math.abs(d.getUTCMonth());    
      this.currentAgeYear = Math.abs(d.getUTCFullYear()); 
      console.log(this.currentAgeDate); 
      console.log(this.currentAgeMonth); 
      console.log(this.currentAgeYear);  
      // this.dob= { date : {
      //   year : this.currentAgeYear,
      //   month: this.currentAgeMonth,
      //   day : this.currentAgeDate
      // }        
      // };
    });
  }
  


// Initialized to specific date (09.10.2018).



}
