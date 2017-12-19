import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TransactionService {
  getTransactionList(): Observable<any>{
    let data = {
      "start" : "",
      "count" : "",
      "search" : ""
      }
    return this.http.post('http://thelogistica.in:4000/transactionlist', data)
      .map((transaction: Response) => transaction)
  }

  getTransaction(id: any): Observable<any>{
    console.log("Get transaction service called"); 
    let query = "?id="+id;   
    console.log('http://thelogistica.in:4000/transaction'+query);    
    return this.http.get('http://thelogistica.in:4000/transaction'+query)
      .map((transaction: Response) => transaction)
  }
  constructor(public http: HttpClient) { }

}
