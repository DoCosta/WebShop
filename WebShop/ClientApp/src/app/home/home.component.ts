import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../products/product';
import { productService } from '../services/productservice';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  public pageTitle = 'WebShop';

  public products: Observable<IProduct[]> = this.productService.get();

  constructor(
    private productService: productService) { }

}