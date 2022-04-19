import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../servicese/product.service';
import { OrderService } from '../servicese/order.service';
import { CustomersService } from '../servicese/customers.service'


@Component({
  selector: 'app-buyorder',
  templateUrl: './buyorder.component.html',
  styleUrls: ['./buyorder.component.css']
})
export class BuyorderComponent implements OnInit {

  constructor(public customerservice: CustomerService, public service: OrderService, public currentcustomer: CustomersService) { }
  quentity: number
  ngOnInit(): void {
    this.service.getallOrders().subscribe(data => { this.service.listOrder = data; });

  }
  button = true;
  placeoderdiv = false;
  placeorderenable() { this.placeoderdiv = true; this.button = false; }

  usercpn = '';
  usercpnn = '';
  err = false;
  cupponprice = 0;
  cupponapplied = 'NA';
  cupontext(usercupon: any) { this.usercpn = usercupon };

  appycupon() { if (this.usercpn == this.customerservice.cupon) { this.usercpnn = '30 cuppon applied'; this.err = true; this.cupponprice = 30; this.cupponapplied = 'Yes' } else { this.usercpnn = 'invalid cuppon'; this.cupponprice = 0; this.err = false; this.cupponapplied = 'No' } }

  codmassag = "";
  placeorder = false;
  codmethod() { this.codmassag = "COD Applyed"; this.placeorder = true; this.upi = false; this.service.paymenttype = 'COD'; this.service.isOrderUpdate = true; }
  upi = false;
  upimethod() { this.upi = true; this.codmassag = ""; this.placeorder = false; this.service.paymenttype = 'UPI'; this.service.isOrderUpdate = true; }


  val: any = 1;
  finalplaceorder() {

    this.val = this.service.listOrder.slice(-1);
    this.val = this.val[0].orderId;

    this.service.Data.orderId = this.val + 1;
    this.service.Data.customerId = this.currentcustomer.Currentuseruserid;
    this.service.CurrentUserOrder = this.val + 1;
    this.service.Data.deleted = 0;
    this.service.Data.paymentId = this.val + 1;
    this.service.Data.totalPrice = this.customerservice.BuyProduct[0].price / 2 * this.customerservice.quentity
    if (this.cupponapplied != 'NA') { this.service.Data.totalPrice = this.service.Data.totalPrice - 30 }
    this.service.saveorder().subscribe(d => { this.service.orderupdate = 'Your Order Has Been Placed'; });


  }

  transationfun(upiid: any) { this.placeorder = true }


}

