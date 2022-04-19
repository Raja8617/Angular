import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './all.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private myhttp: HttpClient) {
  }
  ProductUrl: string = 'https://localhost:44333/api/product';
  listProduct: Products[] = [];
  temporaryProduct: Products[] = [];
  BuyProduct: Products[] = [];
  updatedProduct: Products = new Products();
  quentity = 0;
  cupon = 'raja';
  getallProducts(): Observable<Products[]> {
    return this.myhttp.get<Products[]>(this.ProductUrl);
  }

  getUpdate() { return this.myhttp.put(this.ProductUrl, this.updatedProduct); }

}