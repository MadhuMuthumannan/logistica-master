import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-transactionlistview',
  templateUrl: './transactionlistview.component.html',
  styleUrls: ['./transactionlistview.component.scss'],
  providers:[TransactionService]
})
export class TransactionlistviewComponent implements OnInit {
  // settings = {
  //   columns: {
  //     id: {
  //       title: 'ID'
  //     },
  //     transaction_number: {
  //       title: 'Txn No.'
  //     },
  //     transactionType: {
  //       title: 'Transaction Type'
  //     },
  //     orderNumber: {
  //       title: 'Order Number'
  //     },
  //     price:{
  //       title: 'Price'
  //     },
  //     status:{
  //       title: 'Status'
  //     }
  //   },
  //   pager : {
  //     perPage: 12
  //   },
  //   actions : false
  // };


  data = [];
  constructor(public TransactionService: TransactionService) { }

  ngOnInit() {
    this.TransactionService.getTransactionList().subscribe(transaction => { 
      console.log(transaction.response);
      this.data=transaction.response;
    //  transaction.response.forEach((responsesingle : any)=>{
    //     this.data.forEach((datasingle : any)=>{
    //       datasingle.transactionType=responsesingle.transaction_type_id.name;
    //       datasingle.orderNumber=responsesingle.order_id.order_number;
    //       datasingle.status=responsesingle.status.title;
    //   });
    //});      
    });
  }

}
