import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { UserComponent } from './user/user.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { AddvendorComponent } from './vendor/addvendor/addvendor.component';
import { ViewvendorComponent } from './vendor/viewvendor/viewvendor.component';
import { EditvendorComponent } from './vendor/editvendor/editvendor.component';
import { EditdriverComponent } from './driver/editdriver/editdriver.component';
import { AddsubadminComponent } from './subadmin/addsubadmin/addsubadmin.component';
import { ViewsubadminComponent } from './subadmin/viewsubadmin/viewsubadmin.component';
import { AdddriverComponent } from './driver/adddriver/adddriver.component';
import { ViewdriverComponent } from './driver/viewdriver/viewdriver.component';
import { AddvehicleComponent } from './vehicle/addvehicle/addvehicle.component';
import { ViewvehicleComponent } from './vehicle/viewvehicle/viewvehicle.component';
import { VehicletypeComponent } from './vehicle/vehicletype/vehicletype.component';
import { ViewvehicletypeComponent } from './vehicle/viewvehicletype/viewvehicletype.component';
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
import { TransactionviewComponent } from './transaction/transactionview/transactionview.component';
import { TransactionlistviewComponent } from './transaction/transactionlistview/transactionlistview.component';
import { SessionComponent } from './session/session/session.component';
import { RequestaddComponent } from './request/requestadd/requestadd.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'user/adduser',
    component: AdduserComponent,
  },
  {
    path: 'user/viewuser',
    component: ViewuserComponent,
  },
  {
    path: 'user/edituser/:id',
    component: EdituserComponent,
  },
  {
    path: 'vendor/addvendor',
    component: AddvendorComponent,
  },
  {
    path: 'vendor/viewvendor',
    component: ViewvendorComponent,
   },
   {
    path: 'vendor/editvendor/:id',
    component: EditvendorComponent,
   },
   {
     path: 'user/edituser/:id',
     component: EdituserComponent,
    },
  {
    path: 'subadmin/addsubadmin',
    component: AddsubadminComponent,
  },
  {
    path: 'subadmin/viewsubadmin',
    component: ViewsubadminComponent,
  },
  {
    path: 'driver/adddriver',
    component: AdddriverComponent,
  },
  {
    path: 'driver/viewdriver',
    component: ViewdriverComponent,
  },
  {
    path: 'driver/editdriver/:id',
    component: EditdriverComponent,
  },  
  {
    path: 'driver/editdriver',
    component:EditdriverComponent,
  },
  {
    path: 'vehicle/addvehicle',
    component: AddvehicleComponent,
  },
  {
    path: 'vehicle/editvehicle/:id',
    component: AddvehicleComponent,
  },
  {
    path: 'vehicle/viewvehicle',
    component: ViewvehicleComponent,
  },
  {
    path: 'vehicle/vehicletype',
    component: VehicletypeComponent,
  },
  {
    path: 'vehicle/viewvehicletype',
    component: ViewvehicletypeComponent,
  },
  {
    path: 'vehicle/vehicletype/:id',
    component: VehicletypeComponent,
  },
  {
    path: 'quotation/addquotation',
    component: AddquotationComponent,
  },
  {
    path: 'quotation/viewquotation',
    component: ViewquotationComponent,
  },
  {
    path: 'order/addorder',
    component: AddorderComponent,
  },
  {
    path: 'order/vieworder',
    component: VieworderComponent,
  },
  {
    path: 'transaction/transactiondetails/:id',
    component: TransactionviewComponent,
  },
  {
    path: 'session/session',
    component: SessionComponent,
  },
  {
    path: 'transaction/transactionlistview',
    component: TransactionlistviewComponent,
  },
  {
    path: 'trip/addtrip',
    component: AddtripComponent,
  },
  {
    path: 'trip/viewtrip',
    component: ViewtripComponent,
  },
  {
    path: 'invoice/addinvoice',
    component: AddinvoiceComponent,
  },
  {
    path: 'invoice/viewinvoice',
    component: ViewinvoiceComponent,
  },
  {
    path: 'request/addrequest',
    component: RequestaddComponent,
  },
  {
    path: 'ticket/addticket',
    component: AddticketComponent,
  },
  {
    path: 'ticket/viewticket',
    component: ViewticketComponent,
  },
  {
    path: 'earnings/addearnings',
    component: AddearningsComponent,
  },
  {
    path: 'earnings/viewearnings',
    component: ViewearningsComponent,
  },
  {
    path: 'notifications/viewnotifications',
    component: ViewnotificationsComponent,
  },  
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],  
})
export class PagesRoutingModule {
}
