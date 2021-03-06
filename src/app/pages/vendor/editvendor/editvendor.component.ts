import { Component, OnInit } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { UUID } from 'angular2-uuid';
import 'rxjs/add/operator/toPromise';
import { ExtraOptions, RouterModule, Routes, Params, Router, ActivatedRoute} from '@angular/router';
import { VendorService} from '../../../services/vendor.service';
@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.scss'],
  providers: [VendorService, MyDatePickerModule],
})
export class EditvendorComponent implements OnInit {
  public b64:any;
  private imageData:any = [];
  public id: string;
  private data:any = [];
  public activeInactive = "";
  public addressModal : boolean = true;
  public bankModal : boolean = true;
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
//ID
// Email
// Mobile Number
// Gender
// City
// Country
// Status(Switch)
// Wallet Amount
// DOB
// Age
// Image
// Name
// Change Password
// Agency Name
// Bank Account Detail
// Pan Number
// GST Number
// TIN Number
// Address

  changeListener($event) : void {
    this.readThis($event.target);
  }
 
  ifChecked(event){
    if(event.target.checked){
      this.activeInactive = "1";
    }
    else{
      this.activeInactive = "0";
    }
     
  }

  openAddress(){
    console.log("open modal clicked");
    this.addressModal = false;
    //this.bankModal = true;
    console.log(this.addressModal);
  }

  closeAddress(){
    console.log("close modal clicked");
    this.addressModal = true;
    //this.bankModal = false;
    console.log(this.addressModal);
  }

  openBank(){
      this.bankModal = false;
      //this.addressModal = true;
      console.log(this.bankModal);
  }

 closeBank(){
  this.bankModal = true;
  //this.addressModal = false;
  console.log(this.bankModal);
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

  updateVendor(){  
    console.log("update vendor function");
    console.log(this.data);
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
      this.imageData = {id: this.id, file: this.b64}
      this.VendorService.updateImage(this.imageData).subscribe(image => { 
        console.log(image);      
        this.data=image;
      });
    }
    myReader.readAsDataURL(file);  

  }
  constructor(public VendorService: VendorService, public router:Router ,public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.VendorService.getVendor(this.id).subscribe(vendor => { 
      console.log(vendor);      
      this.data=vendor;
      this.data.status=vendor.status.title;      
    });
    // this.VendorService.getVendors().subscribe(user => { 
    //   this.data=user.response;
      
    //   user.response.forEach((responsesingle : any)=>{
    //       this.data.forEach((datasingle : any)=>{
    //         datasingle.country=responsesingle.country_id.title;
    //         datasingle.city=responsesingle.city_id.title;
    //         datasingle.status=responsesingle.status.title;
    //         datasingle.gender="Male";
    //         datasingle.wallet="$2000";
    //         datasingle.agency="Trinity group";
    //     });
    //   });
     
      
    //   console.log(this.data);
    // });
    // this.data = {
    //   "name":"madhu",
    //   "gender":"Male",
    //   "phone":"1212121212",
    //   "password":"adfasdf343@#$",
    //   "email":"madhu@gmail.com",
    //   "dob":"",
    //   "city":"super",
    //   "agency":"super",
    //   "pan":"super",
    //   "gst":"super",
    //   "tin":"super",
    //   "vat":"super",
    //   "bank":"super",
    //   "ifsc":"super",
    //   "country":"super",
    //   "uuid" : "false",
    //   "system_info" : "false",
    // }
  }

}
