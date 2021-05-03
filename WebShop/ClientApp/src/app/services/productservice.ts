import { of } from "rxjs";
import { Observable } from "rxjs";
import { IProduct } from "../products/product";


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
        }
      ]
    );
  }
}
