import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children:[{
    path: 'adduser',
    component: AdduserComponent,
  },
  {
    path: 'viewuser',
    component: ViewuserComponent,
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes),Ng2SmartTableModule],
  exports: [RouterModule],
})
export class UserRoutingModule { }

export const routedComponents = [
  UserComponent,
  AdduserComponent,
  ViewuserComponent
];
