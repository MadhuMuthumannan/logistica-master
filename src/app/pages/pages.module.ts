import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { UserComponent } from './user/user.component';
import {SelectModule} from 'angular2-select';
import { AdduserComponent } from './user/adduser/adduser.component';
import {EdituserComponent } from './user/edituser/edituser.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AddvendorComponent } from './vendor/addvendor/addvendor.component';
import { ViewvendorComponent } from './vendor/viewvendor/viewvendor.component';
import { AddsubadminComponent } from './subadmin/addsubadmin/addsubadmin.component';
import { ViewsubadminComponent } from './subadmin/viewsubadmin/viewsubadmin.component';
import { AdddriverComponent } from './driver/adddriver/adddriver.component';
import { ViewdriverComponent } from './driver/viewdriver/viewdriver.component';
import { AddvehicleComponent } from './vehicle/addvehicle/addvehicle.component';
import { ViewvehicleComponent } from './vehicle/viewvehicle/viewvehicle.component';
import { AddquotationComponent } from './quotation/addquotation/addquotation.component';
import { ViewquotationComponent } from './quotation/viewquotation/viewquotation.component';
import { AddorderComponent } from './order/addorder/addorder.component';
import { VieworderComponent } from './order/vieworder/vieworder.component';
import { AddtripComponent } from './trip/addtrip/addtrip.component';
import { ViewtripComponent } from './trip/viewtrip/viewtrip.component';
import { AddinvoiceComponent } from './invoice/addinvoice/addinvoice.component';
import { ViewinvoiceComponent } from './invoice/viewinvoice/viewinvoice.component';
import { AddticketComponent } from './ticket/addticket/addticket.component';
import { ViewticketComponent } from './ticket/viewticket/viewticket.component';
import { AddearningsComponent } from './earnings/addearnings/addearnings.component';
import { ViewearningsComponent } from './earnings/viewearnings/viewearnings.component';
import { ViewnotificationsComponent } from './notifications/viewnotifications/viewnotifications.component';
import { MyDatePickerModule } from 'mydatepicker';
import {IMyDpOptions} from 'mydatepicker';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditvendorComponent } from './vendor/editvendor/editvendor.component';
import { EditdriverComponent } from './driver/editdriver/editdriver.component';

//import { UserComponent } from './user/user.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    Ng2SmartTableModule,
    SelectModule,
    MyDatePickerModule,   
    AgmCoreModule.forRoot({
      apiKey: "YOUR KEY GOES HERE",
      libraries: ["places"]
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    UserComponent,
    AdduserComponent,
    ViewuserComponent,
    EdituserComponent,
    AddvendorComponent,
    ViewvendorComponent,
    AddsubadminComponent,
    ViewsubadminComponent,
    AdddriverComponent,
    ViewdriverComponent,
    AddvehicleComponent,
    ViewvehicleComponent,
    AddquotationComponent,
    ViewquotationComponent,
    AddorderComponent,
    VieworderComponent,
    AddtripComponent,
    ViewtripComponent,
    AddinvoiceComponent,
    ViewinvoiceComponent,
    AddticketComponent,
    ViewticketComponent,
    AddearningsComponent,
    ViewearningsComponent,
    ViewnotificationsComponent,
    EditvendorComponent,
    EditdriverComponent,     
  ],
})
export class PagesModule {
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

// Initialized to specific date (09.10.2018).
public model: any = { date: { year: 2018, month: 10, day: 9 } };
}
