import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../servicese/customers.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {


  value = true
  LoginSingupfunction() {
    if (this.value) { this.value = false } else this.value = true
  }

  constructor(public user: CustomersService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getalluser();
    this.user.val = this.user.listuser.slice(-1);
    this.val = this.user.val[0].customerId;

  }

  loginfrom = new FormGroup({

    phoneNo: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(10)]),
    passWord: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(6)]),
  })

  signUpfrom = new FormGroup({
    customerName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(13)]),
    address: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    state: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    pinCode: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    signphoneNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    signpassWord: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
  })


  num: number;
  massage = ""
  link = true;
  loginSubmit() {
    this.user.val = (this.user.listuser.filter(p => (p.phoneNo == this.loginfrom.controls['phoneNo'].value) && (p.passWord == this.loginfrom.controls['passWord'].value)));

    if (this.user.val.length == 0) { this.massage = "invalid username/password"; } else { this.user.Currentuseruserid = this.user.val[0].customerId; this.router.navigate(['home']) }

  }
  get phoneNo() { return this.loginfrom.get('phoneNo') }
  get passWord() { return this.loginfrom.get('passWord') }

  val: number

  SingupSubmit() {
    this.user.val = this.user.listuser.slice(-1);
    this.val = this.user.val[0].customerId;

    this.user.signin.customerId = this.val + 1;
    this.user.signin.address = this.signUpfrom.controls['address'].value;
    this.user.signin.customerName = this.signUpfrom.controls['customerName'].value;
    this.user.signin.pinCode = this.signUpfrom.controls['pinCode'].value;
    this.user.signin.phoneNo = this.signUpfrom.controls['signphoneNo'].value;
    this.user.signin.passWord = this.signUpfrom.controls['signpassWord'].value;
    this.user.signin.state = this.signUpfrom.controls['state'].value;

    if ((this.user.listuser.filter(p => (p.phoneNo == this.user.signin.phoneNo)).length) == 0) {

      this.user.postUser().subscribe(d => { this.user.Currentuseruserid = this.val + 1 });
      this.router.navigate(['home']);
      this.ngOnInit();

    }



  }




  get customerName() { return this.signUpfrom.get('customerName') }
  get address() { return this.signUpfrom.get('address') }
  get state() { return this.signUpfrom.get('state') }
  get pinCode() { return this.signUpfrom.get('pinCode') }
  get signphoneNo() { return this.signUpfrom.get('signphoneNo') }
  get signpassWord() { return this.signUpfrom.get('signpassWord') }




  invalidLogin: boolean
  getalluser() {
    this.user.getallusers().subscribe(data => { this.user.listuser = data });

  }




  notvalidmassage = "not valid";

  checkpno(num: string) { if ((this.user.listuser.filter(p => (p.phoneNo == num)).length) != 0) { this.notvalidmassage = "number is present"; } else { this.notvalidmassage = "not valid" } }



}
