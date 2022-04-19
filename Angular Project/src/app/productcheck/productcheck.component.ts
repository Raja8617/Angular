import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../servicese/product.service';
import { CustomersService } from '../servicese/customers.service';

@Component({
  selector: 'app-productcheck',
  templateUrl: './productcheck.component.html',
  styleUrls: ['./productcheck.component.css']
})
export class ProductcheckComponent implements OnInit {

  constructor(public customerservice: CustomerService, public user: CustomersService) { }


  ngOnInit(): void {
    this.customerservice.quentity = 0;
    this.pleaselogin();

  }

  massage = ''


  slectchanges(event: any) {
    if (event.target.value == 0) { this.quentity = false; this.customerservice.quentity = 0 }
    if ((event.target.value) <= this.customerservice.BuyProduct[0].availableQuentity && (event.target.value) != 0) { this.massage = ''; this.customerservice.quentity = event.target.value; this.quentity = true; } else
      if ((event.target.value) > this.customerservice.BuyProduct[0].availableQuentity) { this.massage = '**Sorry Quentity is not avaliable'; this.quentity = false; this.customerservice.quentity = 0 };
  }
  quentity = false;


  byfunction() {
    if (this.customerservice.quentity != 0) { this.quentity = true; } else if (this.customerservice.quentity == 0 && this.massage == '') { this.massage = 'Select the quentity'; }
  }


  login = this.user.Currentuseruserid;
  lg = false;
  pleaselogin() {
    if (this.login != 0) { this.lg = true; }
  }

}
