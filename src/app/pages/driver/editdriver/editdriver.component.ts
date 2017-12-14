import { Component, OnInit } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import {Md5} from 'ts-md5/dist/md5';
import { DriverService} from '../../../services/driver.service';
@Component({
  selector: 'app-editdriver',
  templateUrl: './editdriver.component.html',
  styleUrls: ['./editdriver.component.scss'],
  providers: [DriverService, MyDatePickerModule],
})
export class EditdriverComponent implements OnInit {
  public b64:any;
  
  public id: string;
  private data:any = {
    "name":'',
    "gender":'1',
    "phone":'',
    "password":'',
    "email":'',
    "dob":'',
    "city":'1',
    "agency":'',
    "pan":'',
    "gst":'',
    "tin":'',
    "vat":'',
    "bank":'',
    "ifsc":'',
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
    "agency":false,
    "pan":false,
    "gst":false,
    "tin":false,
    "vat":false,
    "bank":false,
    "ifsc":false,
    "country":false,
    "uuid" : false,
    "system_info" : false,
  }

  checkValidation(){
    this.error.age=false;
    this.error.agency=false;
    this.error.pan=false;
    this.error.gst=false;
    this.error.tin=false;
    this.error.address=false;  
    this.error.name = false;
    this.error.gender = false;
    this.error.status = false;
    this.error.email = false;
    this.error.password = false;
    this.error.phone = false;
    this.error.country = false;
    this.error.city = false;
    this.error.dob = false;
    this.error.bank = false;
    this.error.ifsc = false;
    this.error.wallet = false;
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
    if(this.data.genderr == null || this.data.genderr == ""|| this.data.genderr == undefined)
    {
      this.error.genderr = true;
      flag = false;
    }
    if(this.data.agency == null || this.data.agency == "")
    {
      this.error.agency = true;
      flag = false;
    }
    if(this.data.pan == null || this.data.pan == "")
    {
      this.error.pan = true;
      flag = false;
    }
    if(this.data.gst == null || this.data.gst == "")
    {
      this.error.gst = true;
      flag = false;
    }
    if(this.data.bank == null || this.data.bank == "")
    {
      this.error.bank = true;
      flag = false;
    }
    if(this.data.ifsc == null || this.data.ifsc == "")
    {
      this.error.ifsc = true;
      flag = false;
    }
    if(this.data.tin == null || this.data.tin == "")
    {
      this.error.tin = true;
      flag = false;
    }
    if(this.data.vat == null || this.data.vat == "")
    {
      this.error.vat = true;
      flag = false;
    }
    if(this.data.address == null || this.data.address == "")
    {
      this.error.address = true;
      flag = false;
    }
    if(this.data.wallet == null || this.data.wallet == "")
    {
      this.error.wallet = true;
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
    if(this.data.dob == null || this.data.dob == "")
    {
      this.error.dob = true;
      flag = false;
    }
    if(this.data.status == null || this.data.status == "")
    {
      this.error.status = true;
      flag = false;
    }
    console.log(this.error);  
    return flag;
    }


    editUser(){  
      console.log("add user function");
      console.log("gender:" +this.data.genderr);
      console.log("dateofbirth:" +this.data.dob);
      console.log("bank:" +this.data.bank);
      if(this.checkValidation())
      {
        // this.data.city = "1";
        // this.data.country = "1";
        // this.data.status="Active";
        // this.data.dob = parseInt(this.data.dateofbirth.epoc);
        console.log(this.data);
        // console.log("dateofbirth:"+this.data.dob);
        // console.log("dateofbirth.epoc:"+this.data.dateofbirth.epoc);
        // console.log(this.data);
        //this.UserService.newUser(this.data); 
        //this._flashMessagesService.show('Success!', { cssClass: 'alert-success' } );   
        //this.data=[];
      }
         
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
  constructor(public DriverService: DriverService) { }

  ngOnInit() {
    this.data = {
      "name":"madhu",
      "gender":"Male",
      "phone":"1212121212",
      "password":"adfasdf343@#$",
      "email":"madhu@gmail.com",
      "dob":"",
      "city":"super",
      "agency":"super",
      "pan":"super",
      "gst":"super",
      "tin":"super",
      "vat":"super",
      "bank":"super",
      "ifsc":"super",
      "country":"super",
      "uuid" : "false",
      "system_info" : "false",
  }

  }
}
