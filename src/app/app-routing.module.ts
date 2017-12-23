import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { EdituserComponent } from './pages/user/edituser/edituser.component';
import { EditvendorComponent } from './pages/vendor/editvendor/editvendor.component';
import { EditdriverComponent } from './pages/driver/editdriver/editdriver.component';
import { AddvehicleComponent } from './pages/vehicle/addvehicle/addvehicle.component';
import { VehicletypeComponent } from './pages/vehicle/vehicletype/vehicletype.component';
import { PagesComponent } from "./pages/pages.component";

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  // { path: '', redirectTo: 'pages', pathMatch: 'full' },
  // { path: 'edituser/:id', component: EdituserComponent },
  { path: 'edituser/:id', redirectTo: 'pages/user/edituser/:id' }, 
  { path: 'pages/user/edituser/:id', component: EdituserComponent },
  { path: 'editvehicle/:id', redirectTo: 'pages/vehicle/editvehicle/:id' }, 
  { path: 'pages/vehicle/editvehicle/:id', component: AddvehicleComponent },
  { path: 'vehicletype/:id', redirectTo: 'pages/vehicle/vehicletype/:id' }, 
  { path: 'pages/vehicle/vehicletype/:id', component: VehicletypeComponent },
  { path: 'editvendor/:id', redirectTo: 'pages/vendor/editvendor/:id' }, 
  { path: 'pages/vendor/editvendor/:id', component: EditvendorComponent },
  { path: 'editdriver/:id', redirectTo: 'pages/driver/editdriver/:id' }, 
  { path: 'pages/driver/editdriver/:id', component: EditdriverComponent },
  { path: 'transactiondetails/:id', redirectTo: 'pages/transaction/transactiondetails/:id' }, 
  { path: 'pages/transaction/transactiondetails/:id', component: EditdriverComponent },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
