import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'my-products',
  templateUrl: './app/components/products/products.component.html'
})

export class ProductsComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;
  message: string = '';
  error: any;
  items: number = 5;
  numProd: number;
  start: number = 0;

  constructor(
    private router: Router,
    private productService: ProductService) { }

  getProducts(startIndex: number, numItems: number) {
    this.productService.getProducts(startIndex, numItems).then(products => {
      this.products = products;
    });
  }

  getAllProducts() {
    this.productService.getAllProducts().then(products => {
      this.numProd = products.length;
    });

  }

  ngOnInit() {
    this.getAllProducts();
    this.getProducts(this.start, this.items);
  }

  ngOnChanges() {
    console.log('onchange start ', this.start, ' itens ', this.items);
    this.getProducts(this.start, this.items);
  }

  onSelect(product: Product) { this.selectedProduct = product; }

  gotoDetail(selectedProduct: Product) {
    this.router.navigate(['/productDetail', selectedProduct._id]);
  }

  addProduct() {
    this.selectedProduct = null;
    this.router.navigate(['/productDetail', 'new']);
  }

  deleteProduct(product: Product, event: any) {
    event.stopPropagation();
    this.productService
      .delete(product)
      .then(res => {
        this.products = this.products.filter(h => h !== product);
        if (this.selectedProduct === product) { this.selectedProduct = null; }
        this.message = 'Product deleted';
      })
      .catch(error => this.error = error);
  }

  next() {
    this.start += this.items;
    this.getProducts(this.start, this.items);
  }

  prev() {
    this.start -= this.items;
    this.getProducts(this.start, this.items);
  }
}
