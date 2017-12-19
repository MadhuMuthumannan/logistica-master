import { Component, OnInit } from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
@Component({
  selector: 'app-viewtrip',
  templateUrl: './viewtrip.component.html',
  styleUrls: ['./viewtrip.component.scss']
})
export class ViewtripComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      model: {
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
      load: {
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
    {
      id: 1,
      name: "Leanne Graham",
      mobile: "Bret",
      email: "Sincere@april.biz",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    },
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 
    ,
    {
      id: 222,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "a@gmail.com",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }, 

    
    // ... list of items
    
    {
      id: 333,
      name: "Angelica Ramos",
      mobile: "3215478952",
      email: "Sincere@april.biz",
      password: "*********",
      facebook: "asfja@fb.com",
      google: "adfh@gmail.com",
      status: 'active'
    }
  ];
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
