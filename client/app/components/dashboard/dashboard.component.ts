import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    products: Product[] = [];

    constructor(
        private router: Router,
        private productService: ProductService) {
    }

    ngOnInit() {
        this.productService.getProducts()
            .then(products => this.products = products);
    }

    gotoDetail(product: Product) {
        let link = ['/productDetail', product._id];
        this.router.navigate(link);
    }
}