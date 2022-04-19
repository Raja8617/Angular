import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../servicese/product.service';
import { OrderService } from '../servicese/order.service';
import { OrderdetailsService } from '../servicese/orderdetails.service';
import { PaymentService } from '../servicese/payment.service'



@Component({
  selector: 'app-finalpage',
  templateUrl: './finalpage.component.html',
  styleUrls: ['./finalpage.component.css']
})
export class FinalpageComponent implements OnInit {

  constructor(public customerservice: CustomerService, public service: OrderService, public paymentservice: PaymentService, public orderdetails: OrderdetailsService) { }

  ngOnInit(): void {

    if (this.service.isOrderUpdate)

      this.update();

  }


  update() {
    this.paymentservice.Data.paymentId = this.service.currnentOrderId + 1;
    this.paymentservice.Data.paymentType = this.service.paymenttype;
    if (this.service.paymenttype == 'COD') { this.paymentservice.Data.isDone = 'NO' } else { this.paymentservice.Data.isDone = 'YES' }
    this.paymentservice.savePayment().subscribe(d => { });

    this.orderdetails.Data.orderId = this.service.Data.orderId;
    this.orderdetails.Data.quantity = this.customerservice.quentity;
    this.orderdetails.Data.productId = this.customerservice.BuyProduct[0].productId;
    this.orderdetails.Data.price = this.customerservice.BuyProduct[0].price / 2;
    this.orderdetails.saveorder().subscribe(d => { });


    this.customerservice.updatedProduct.availableQuentity = this.customerservice.BuyProduct[0].availableQuentity - this.customerservice.quentity;
    this.customerservice.updatedProduct.productId = this.customerservice.BuyProduct[0].productId;
    this.customerservice.getUpdate().subscribe(d => { });
    this.service.isOrderUpdate = false;
  }

}
