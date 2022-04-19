import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../servicese/product.service';
import { OrderService } from '../servicese/order.service';
import { OrderdetailsService } from '../servicese/orderdetails.service';
import { PaymentService } from '../servicese/payment.service';
import { CustomersService } from '../servicese/customers.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  constructor(public customerservice: CustomerService, public Orderservice: OrderService, public paymentservice: PaymentService, public orderdetails: OrderdetailsService, public currentcustomer: CustomersService, public user: CustomersService) { }


  ngOnInit(): void {
    if (this.user.Currentuseruserid == 0) { this.user.ng = false; }
    else {
      this.user.ng = true;
      this.user.getallusers().subscribe(data => { this.user.listuser = data; });
      this.user.currentuserinfo = this.user.listuser.filter(p => (p.customerId == this.user.Currentuseruserid))[0];
      this.Orderservice.getallOrders().subscribe(data => { this.Orderservice.listOrder = data; });
    }
  }

  ord: boolean = false
  acc: boolean = false




  listOrder() {
    this.ord = true; this.acc = false;

    this.Orderservice.getallOrders().subscribe(data => { this.Orderservice.listOrder = data; });
    this.Orderservice.CurrentUserOrder = this.Orderservice.listOrder.filter(p => (p.customerId == this.user.Currentuseruserid) && (p.deleted == 0))

    this.mg = false;
  }
  mg = false;
  massage = "order cancled"
  cancleorder(id: any) {
    this.Orderservice.updatedOrder.orderId = id;
    this.Orderservice.updatedOrder.deleted = 1;

    this.Orderservice.getUpdate().subscribe((p => { this.massage = 'order cancled'; this.mg = true; this.ngOnInit(); }))



  }
  orderpresent = "No order present";







  // allusers(){
  //  this.user.getallusers().subscribe(data => { this.user.listuser = data;});
  //    this.user.currentuserinfo=this.user.listuser.filter(p => (p.customerId==this.user.Currentuseruserid))[0];
  // }


  account() {
    this.ord = false; this.acc = true;

    this.user.getallusers().subscribe(data => { this.user.listuser = data; });
    this.user.currentuserinfo = this.user.listuser.filter(p => (p.customerId == this.user.Currentuseruserid))[0];
    this.user.getallusers().subscribe(data => { this.user.listuser = data; });
    this.user.getallusers().subscribe(data => { this.user.listuser = data; });
    this.user.currentuserinfo = this.user.listuser.filter(p => (p.customerId == this.user.Currentuseruserid))[0]; this.user.currentuserinfo = this.user.listuser.filter(p => (p.customerId == this.user.Currentuseruserid))[0];
  }

  signUpfrom = new FormGroup({
    customerName: new FormControl(this.user.currentuserinfo.customerName, [Validators.required, Validators.minLength(4), Validators.maxLength(13)]),
    address: new FormControl(this.user.currentuserinfo.address, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    state: new FormControl(this.user.currentuserinfo.state, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    pinCode: new FormControl(this.user.currentuserinfo.pinCode, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    signphoneNo: new FormControl(this.user.currentuserinfo.phoneNo, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    signpassWord: new FormControl(this.user.currentuserinfo.passWord, [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
  })


  signupsubmitmassage = "Updated";
  sb: boolean = false;

  SingupSubmit() {

    this.user.updateduser.customerId = this.user.Currentuseruserid;
    this.user.updateduser.address = this.signUpfrom.controls['address'].value;
    this.user.updateduser.customerName = this.signUpfrom.controls['customerName'].value;
    this.user.updateduser.pinCode = this.signUpfrom.controls['pinCode'].value;
    this.user.updateduser.passWord = this.signUpfrom.controls['signpassWord'].value;
    this.user.updateduser.state = this.signUpfrom.controls['state'].value;


    this.user.getUpdateuser().subscribe(p => { if (this.sb) { this.sb = false; } else { this.sb = true } })


  }




  get customerName() { return this.signUpfrom.get('customerName') }
  get address() { return this.signUpfrom.get('address') }
  get state() { return this.signUpfrom.get('state') }
  get pinCode() { return this.signUpfrom.get('pinCode') }
  get signphoneNo() { return this.signUpfrom.get('signphoneNo') }
  get signpassWord() { return this.signUpfrom.get('signpassWord') }













  Updateitmassage = 'update it';
  updt = false;
  updateit() { if (this.updt) { this.updt = false; this.Updateitmassage = "Update it" } else { this.updt = true; this.Updateitmassage = "cancle Update" } }







}
