import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../products/product';
import { ProductService } from '../products/products.service';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent {
  public pageTitle = 'WebShop';
}


