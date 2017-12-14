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
  public b64:any;
  
  public id: string;
  changeListener($event) : void {
    this.readThis($event.target);
  }

 
 
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    console.log(file);
    myReader.onloadend = (e) => {
      this.b64 = myReader.result;
      console.log(this.b64);
    }
    myReader.readAsDataURL(file);  

  }

  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        //this.location = position.coords;
        console.log(position.coords); 
        alert("Latitude: "+position.coords.latitude+"Longtitude: "+position.coords.longitude);         
      });
   }
  }

  public model: any = { date: { year: 2018, month: 10, day: 9 } };
  data=[];
  selectedCountry = [];
  selectedCity = [];
  ifChecked(event){
    if(event.target.checked){
      this.data.push(status = "Active");
    }
    else{
      this.data.push(status = "Inactive");
    }
     
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
       this.selectedCountry.push({label :user.country_id.title,value:0});
       this.selectedCity.push({label :user.city_id.title,value:0});
      if(user.gender==0){
        this.genderr= "Male";
      }
      else{
        this.genderr= "Female";
      }
    });
  }

}
