import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from './all.model'


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private myhttp: HttpClient) { }


  OrderUrl: string = 'https://localhost:44333/api/order';

  Data: Orders = new Orders();
  listOrder: Orders[] = [];
  CurrentUserOrder: Orders[] = [];
  orderupdate = ''
  paymenttype: string;
  isOrderUpdate = false;
  currnentOrderId: number;
  updatedOrder: Orders = new Orders();
  saveorder() {
    return this.myhttp.post(this.OrderUrl, this.Data)
  }

  getallOrders(): Observable<Orders[]> {
    return this.myhttp.get<Orders[]>(this.OrderUrl);
  }

  getUpdate() { return this.myhttp.put(this.OrderUrl, this.updatedOrder); }
}
