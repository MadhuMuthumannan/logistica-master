import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class SessionService {
  getSessionList(): Observable<any>{
    return this.http.get('http://thelogistica.in:4000/sessionlist')
      .map((session: Response) => session)
  }
  constructor(public http: HttpClient) { }

}
