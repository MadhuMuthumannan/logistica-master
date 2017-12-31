import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestadd',
  templateUrl: './requestadd.component.html',
  styleUrls: ['./requestadd.component.scss']
})
export class RequestaddComponent implements OnInit {
  private userList :any = [];
  private vehicleTypeList :any = [];
  private vehicleRateTypeList :any = [];
  private driverList :any = [];
  private request :any = {};
  constructor() {
    this.userList = [
      {title: "One", label: "One", value: "One"},
      {title: "Two", label: "Two", value: "Two"},
      {title: "Three", label: "Three", value: "Three"},
      {title: "Four", label: "Four", value: "Four"}
    ];
    this.vehicleTypeList = ["one","two","three","four"];
    this.vehicleRateTypeList = ["one","two","three","four"];
    this.driverList = ["one","two","three","four"];
   }

   reqSubmit(){
     console.log(this.request);
   }


  ngOnInit() {
  }

}
