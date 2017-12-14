import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../services/vehicle.service';
@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.scss'],
  providers: [VehicleService],
})
export class ViewvehicleComponent implements OnInit {
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Model'
      },
      type: {
        title: 'Type.'
      },
      vehiclenum: {
        title: 'Vehicle No.'
      },
      year: {
        title: 'Manufacture Year'
      },
      capacity: {
        title: 'Capacity'
      },
      maxweight: {
        title: 'Max Weight'
      },
      dimension: {
        title: 'Load'
      },
      helpers: {
        title: 'Helpers'
      },
      status: {
        title: 'Status'
      }
    },
    pager : {
      perPage: 12
    },
    width:"20px, 8px,20px,15px,15px,15px,15px,10px "
  };

  data = [
    // {      
    //     "image_id": null,
    //     "driver_id": {
    //         "city_id": {
    //             "status": {
    //                 "message_ar": "Active",
    //                 "message": "Active",
    //                 "code": 1,
    //                 "title_ar": "Active",
    //                 "title": "Active"
    //             },
    //             "south_lat": 36.12,
    //             "north_lat": 12.45,
    //             "title": "Bangalore",
    //             "north_lng": 45.32,
    //             "country_id": {
    //                 "status": {
    //                     "message_ar": "Active",
    //                     "message": "Active",
    //                     "code": 1,
    //                     "title_ar": "Active",
    //                     "title": "Active"
    //                 },
    //                 "image_id": null,
    //                 "created_timestamp": 0,
    //                 "updated_timestamp": 0,
    //                 "title": "India",
    //                 "short_code": "IN",
    //                 "id": 1,
    //                 "ascurrency_title": "INR"
    //             },
    //             "id": 1
    //         },
    //         "created_timestamp": 1511203801,
    //         "lng": null,
    //         "id": 1,
    //         "aadhar_no_document": 0,
    //         "updated_timestamp": 1511203801,
    //         "license_number": "",
    //         "aadhar_no": "",
    //         "licence_no_document": 0,
    //         "token_id": "7889410c39adcbd7e550c91a5c0351e3",
    //         "email": "raja5678@gmail.com",
    //         "status": {
    //             "message_ar": "InActive",
    //             "message": "InActive",
    //             "code": 2,
    //             "title_ar": "InActive",
    //             "title": "InActive"
    //         },
    //         "online_status": null,
    //         "socket_id": null,
    //         "vendor_id": 0,
    //         "driver_visibility": 0,
    //         "fcm_id": "",
    //         "image_id": {
    //             "created_timestamp": 1511203801,
    //             "updated_timestamp": 1511203801,
    //             "image": "",
    //             "id": 11
    //         },
    //         "lat": null,
    //         "name": "rajaram",
    //         "mobile": "1689045",
    //         "gender": 0,
    //         "dob": 0
    //     },
    //     "capacity": "23",
    //     "vehicle_number": "200",
    //     "rc_book_document": null,
    //     "helper_availability": 1,
    //     "model": "Truck",
    //     "vehicle_type": {
    //         "status": {
    //             "message_ar": "Active",
    //             "message": "Active",
    //             "code": 1,
    //             "title_ar": "Active",
    //             "title": "Active"
    //         },
    //         "dimension": "24 24",
    //         "capacity": "2 Ton",
    //         "id": 2,
    //         "name": "TAXI"
    //     },
    //     "id": 3,
    //     "manufacture_year": 23
    
    // }
  ];
  constructor(public VehicleService:VehicleService) { }

  ngOnInit() {  
    this.VehicleService.getVehicles().subscribe(user => { 
      this.data=user.response;
      console.log(this.data);
    });

  }

}
