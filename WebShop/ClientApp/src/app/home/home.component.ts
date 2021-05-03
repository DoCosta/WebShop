import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from '../products/product';
import { ProductService } from '../products/products.service';
import { productService } from '../services/productservice';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent {
  public pageTitle = 'WebShop';

  public products: Observable<IProduct[]> = this.productService.get();

  constructor(
    private productService: productService) { }



}

