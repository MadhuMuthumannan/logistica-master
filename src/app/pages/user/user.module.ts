import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { UserRoutingModule, routedComponents } from './user-routing.module';
//import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EdituserComponent } from './edituser/edituser.component';


@NgModule({
  imports: [
    ThemeModule,
    UserRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    ViewuserComponent,
    EdituserComponent,
  ],
  providers: [
    SmartTableService,
  ],
})
export class UserModule { }
