import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  
  menu = MENU_ITEMS;
}
