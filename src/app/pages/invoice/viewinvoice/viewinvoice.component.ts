import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../../services/invoice.service';

@Component({
  selector: 'app-viewinvoice',
  templateUrl: './viewinvoice.component.html',
  styleUrls: ['./viewinvoice.component.scss'],
  providers: [InvoiceService]
})
export class ViewinvoiceComponent implements OnInit {
public data = [];
  constructor(public InvoiceService: InvoiceService) { }

  ngOnInit() {
    this.InvoiceService.getInvoiceList().subscribe(invoice => { 
    console.log("Get user service called on component side");
    console.log(invoice.response);
    this.data = invoice.response;
  });
  }

}
