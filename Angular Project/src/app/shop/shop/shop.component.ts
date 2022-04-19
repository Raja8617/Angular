import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../servicese/product.service'


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(public customerservice: CustomerService) { }
  value = 0;

  ngOnInit(): void {
    this.customerservice.getallProducts().subscribe(data => { this.customerservice.listProduct = data; this.customerservice.temporaryProduct = data; });

  }


  slectchanges(event: any) {
    this.shortarray(event.target.value);
  }

  shortarray(input: any) {
    if (input == 0) { this.yourfunction(this.value); }
    if (input == 1) { this.customerservice.temporaryProduct.sort((a, b) => a.price - b.price) }
    if (input == 2) { this.customerservice.temporaryProduct.sort((a, b) => b.price - a.price) }
    if (input == 3) { this.yourfunction(this.value); this.customerservice.temporaryProduct = this.customerservice.temporaryProduct.filter(p => (p.price) / 2 > 500) }
    if (input == 4) { this.yourfunction(this.value); this.customerservice.temporaryProduct = this.customerservice.temporaryProduct.filter(p => (p.price) / 2 < 501) }

  }


  yourfunction(value: number) {
    this.value = value;
    if (value == 0) {
      this.customerservice.temporaryProduct = this.customerservice.listProduct;
    } else { this.customerservice.temporaryProduct = this.customerservice.listProduct.filter(p => p.categoryId == value); }
  }



  productcheck(productId: any) {
    this.customerservice.BuyProduct = this.customerservice.listProduct.filter(p => p.productId == productId);


  }

}
