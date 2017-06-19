import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'my-product-detail',
  templateUrl: './app/components/productDetail/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  newProduct = false;
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const id = params.id;
      if (id === 'new') {
        this.newProduct = true;
        this.product = new Product();
      } else {
        this.newProduct = false;
        this.productService.getProduct(id)
          .then(product => this.product = product);
      }
    });
  }

  save() {
    this.productService
      .save(this.product)
      .then(product => {
        this.product = product; // saved product, w/ id if new
        this.goBack();
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  goBack() {
    window.history.back();
  }
}
