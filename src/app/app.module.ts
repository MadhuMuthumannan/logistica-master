/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { VendorComponent } from './vendor/vendor.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {HttpClientModule} from '@angular/common/http';
import {SelectModule} from 'angular2-select';
import {PagesModule} from './pages/pages.module';
import { MyDatePickerModule } from 'mydatepicker';
import {IMyDpOptions} from 'mydatepicker';
import {Md5} from 'ts-md5/dist/md5';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { FlashMessagesModule } from 'angular2-flash-messages';



@NgModule({
  declarations: [AppComponent, UserComponent, VendorComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDLgJ4YaYspfMTzMmVLGzyqcHZxCZvazvM",
      libraries: ["places"]
    }),
    // FlashMessagesModule.forRoot(),
    BrowserModule,
    SelectModule,
    PagesModule,
    //BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SmartTableModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    MyDatePickerModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

// Initialized to specific date (09.10.2018).
public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor(    
  ) {}
}
