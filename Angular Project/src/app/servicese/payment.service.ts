import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders, Payment } from './all.model'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private myhttp: HttpClient) { }
  PaymentUrl: string = 'https://localhost:44333/api/payment';

  Data: Payment = new Payment();
  listOrder: Payment[] = [];
  orderupdate = ''
  savePayment() {
    return this.myhttp.post(this.PaymentUrl, this.Data)
  }

  getallPayment(): Observable<Payment[]> {
    return this.myhttp.get<Payment[]>(this.PaymentUrl);
  }

}
