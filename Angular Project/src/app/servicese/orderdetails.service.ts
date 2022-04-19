import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders, Ordersdetails } from './all.model'

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor(private myhttp: HttpClient) { }
  OrderDetailsUrl: string = 'https://localhost:44333/api/orderDetails';

  Data: Ordersdetails = new Ordersdetails();
  listOrder: Ordersdetails[] = [];
  orderupdate = ''

  saveorder() {
    return this.myhttp.post(this.OrderDetailsUrl, this.Data)
  }

  getallOrders(): Observable<Ordersdetails[]> {
    return this.myhttp.get<Ordersdetails[]>(this.OrderDetailsUrl);
  }
}
