import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class InvoiceService {
  getInvoiceList(): Observable<any>{
    let data = {
      "start" : "",
      "count" : "",
      "search" : ""
      }
    return this.http.post('http://thelogistica.in:4000/invoicelist', data)
      .map((invoice: Response) => invoice)
  }
  constructor(public http: HttpClient) { }

}
