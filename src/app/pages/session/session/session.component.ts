import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
  providers:[SessionService]
})
export class SessionComponent implements OnInit {
  settings = {
    columns: {
      session_id: {
        title: 'Token'
      },
      user: {
        title: 'User.'
      },
      admin: {
        title: 'Admin'
      },
      vendor: {
        title: 'Vendor'
      },
      uuid:{
        title: 'UUID'
      },
      system_info:{
        title: 'System Info'
      }
    },
    pager : {
      perPage: 12
    },
    actions : false
  };

  data= [];
  constructor(public SessionService: SessionService) { }

  ngOnInit() {
    this.SessionService.getSessionList().subscribe(session => { 
      console.log(session.response);      
      //console.log(this.data); 
      this.data= session.response;
      session.response.forEach((responsesingle : any)=>{
        this.data.forEach((datasingle : any)=>{
          datasingle.user=responsesingle.user.name;
          datasingle.vendor="vendor name";
          datasingle.admin="admin name";
      });
    }); 
    });
  }

}
