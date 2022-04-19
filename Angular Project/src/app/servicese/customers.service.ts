import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './all.model'


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }


  Currentuseruserid = 0;
  signin: User = new User();
  loginuser: User = new User()
  listuser: User[] = [];
  val: User[] = [];
  updateduser: User = new User()
  currentuserinfo: User = new User();
  ng: boolean = false;

  customerUrl = "https://localhost:44333/api/user";
  getallusers(): Observable<User[]> {
    return this.http.get<User[]>(this.customerUrl);
  }


  postUser() {
    return this.http.post(this.customerUrl, this.signin);
  }

  getUpdateuser() { return this.http.put(this.customerUrl, this.updateduser); }


  customemassage = "logout";
  fun() {
    if (this.Currentuseruserid == 0) { this.customemassage = "login"; } else { this.customemassage = "logout"; }
  }
}



