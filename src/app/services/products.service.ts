import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductId(Id: number) {
    return this.getAllProducts().pipe(
      map((productsArray: any) => {
        return productsArray.find((p: any) => p.Id === Id);
      })
    );
  }

  getAllProducts() {
    return this.http.get('data/product.json');
  }
}
