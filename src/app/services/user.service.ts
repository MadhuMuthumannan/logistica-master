import { Injectable } from '@angular/core';
import { User } from '../pages/user/adduser/user';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class UserService {
  newUser(user:User){
    //alert("on sumbit clicked");
    // let data = {
    //   "name" : "madhu",
    //   "email" : "madhu16@gmail.com",
    //   "phone" : "12376790",
    //   "password" : "123456",
    //   "uuid" : "23456786",
    //   "system_info" : "web"
    // }
    console.log("User values in service are:");
    console.log(user);    
     this.http
     .post('http://thelogistica.in:4000/user', user, {})
     .subscribe();
  }
  constructor(public http: HttpClient) { }
      // getUsers(){
      //   console.log("Get users service called");
      //   let data = {
      //     "start" :"0",
      //     "count" : "10",
      //     "search" : ""
      //   }
      //   return this.http.post('http://thelogistica.in:4000/userlist', data).subscribe(user => {
      //     console.log("data is returned as:");
      //     console.log(user);
      //     return user;
      //   });
      // }
      getUsers(): Observable<any>{
        let data ={
          "search" : "",
          "start" : "0",
          "count" : "100"
        }
        return this.http.post('http://thelogistica.in:4000/userlist', data)
          .map((user: Response) => user)
      }

      getCityList(): Observable<any>{      
        let data ={
          "search" : "",
          "start" : "0",
          "count" : "10"
        } 
        return this.http.post('http://thelogistica.in:4000/citylist', data)
          .map((city: Response) => city)
      }

      getUser(id: any): Observable<any>{
        console.log("Get user service called"); 
        let query = "?id="+id;   
        console.log('http://thelogistica.in:4000/userprofile'+query);    
        return this.http.get('http://thelogistica.in:4000/userprofile'+query)
          .map((user: Response) => user)
      }

      getCountryList(): Observable<any>{  
        let data ={
          "search" : "",
          "start" : "0",
          "count" : "10"
        }     
        return this.http.post('http://thelogistica.in:4000/countrylist',data)
          .map((country: Response) => country)
      }
  }

