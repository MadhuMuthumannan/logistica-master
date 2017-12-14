import { Component, OnInit } from '@angular/core';
import { SubadminService } from '../../../services/subadmin.service';
import { Subadmin } from '../subadmin';
@Component({
  selector: 'app-addsubadmin',
  templateUrl: './addsubadmin.component.html',
  styleUrls: ['./addsubadmin.component.scss'],
  providers: [SubadminService]
})
export class AddsubadminComponent implements OnInit {

  constructor(public SubadminService:SubadminService) { }
  onSubmit({value, valid}:{value:Subadmin, valid:boolean}){    
    this.SubadminService.newSubadmin(value);      
}
  ngOnInit() {
  }

}
