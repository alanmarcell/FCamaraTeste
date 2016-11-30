import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";
import { Router } from '@angular/router';

@Component({
    selector: 'my-products',
    templateUrl: './app/components/products/products.component.html'
})

export class ProductsComponent implements OnInit {

    products: Product[];
    selectedProduct: Product;
    error: any;

    constructor(
        private router: Router,
        private productService: ProductService) { }
    getProducts() {
        this.productService.getProducts().then(products => {
        this.products = products,
            console.log(products)
        });
    }
    ngOnInit() {
        this.getProducts();
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
            })
            .catch(error => this.error = error);
    }
}
