import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewtrip',
  templateUrl: './viewtrip.component.html',
  styleUrls: ['./viewtrip.component.scss']
})
export class ViewtripComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
