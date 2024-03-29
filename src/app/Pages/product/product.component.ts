import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../../Interface/property';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  public productId: number;
  product = new Property();
  constructor(
    private route: ActivatedRoute,

    private productsService: ProductsService
  ) {
    this.productId = 0;
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params['Id'];

    this.route.params.subscribe((params) => {
      this.productId = +params['Id'];
      this.productsService
        .getProductId(this.productId)
        .subscribe((data: Property) => {
          this.product = data;
        });
    });
  }
}
