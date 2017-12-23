import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { UUID } from 'angular2-uuid';
import 'rxjs/add/operator/toPromise';
import { ExtraOptions, RouterModule, Routes, Params, Router, ActivatedRoute} from '@angular/router';
import { TransactionService } from '../../../services/transaction.service';
@Component({
  selector: 'app-transactionview',
  templateUrl: './transactionview.component.html',
  styleUrls: ['./transactionview.component.scss'],
  providers: [TransactionService],
})
export class TransactionviewComponent implements OnInit {
 public id : string;
 public data :any=  [];
  constructor(public TransactionService:TransactionService,public router:Router ,public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.TransactionService.getTransaction(this.id).subscribe(transaction => { 
      console.log(transaction);      
      this.data=transaction;
      //this.data.status=vendor.status.title;      
    });
  }

}
