import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomersService } from './servicese/customers.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'XceedanceProject';
  constructor(public user: CustomersService) { }
  massage = "Login"

  var = this.user.Currentuseruserid;

  ngOnInit(): void {



    if (this.var == 0) { this.massage = "Login" } else { this.massage = "Logout" }

  }











}

