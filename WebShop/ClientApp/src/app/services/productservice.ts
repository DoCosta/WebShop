import { of } from "rxjs";
import { Observable } from "rxjs";
import { IProduct } from "../products/product";
import { Injectable } from "@angular/core";


@Injectable()
export class productService {

  public get(): Observable<IProduct[]> {
    return of(
      [
        {
          productId: 2,
          productName: "Maus",
          releaseDate: "01.01.2021",
          description: "RGB",
          price: 30.00,
          imageUrl: "",
        },
        {
          productId: 3,
          productName: "Bildschirm",
          releaseDate: "12.01.2021",
          description: "No Numpad",
          price: 50.00,
          imageUrl: "",
        },
        {
          productId: 4,
          productName: "PC",
          releaseDate: "04.02.2021",
          description: "RTX3080",
          price: 930.00,
          imageUrl: "",
        }
      ]
    );
  }
}
