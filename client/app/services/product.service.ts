import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Product } from "../models/product";

@Injectable()
export class ProductService {

    private productsUrl = 'api/products';  // URL to web api

    constructor(private http: Http) { }

    getProducts(): Promise<Product[]> {
        let headers = new Headers({
            'x-access-token': localStorage.getItem("_token")
        });

        return this.http.get(this.productsUrl, { headers: headers })
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(this.handleError);
    }
    getProduct(id: string): Promise<Product> {
        let headers = new Headers({
            'x-access-token': localStorage.getItem("_token")
        });

        return this.http.get(this.productsUrl + '/' + id, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(product: Product): Promise<Product> {
        if (product._id) {
            return this.put(product);
        }
        return this.post(product);
    }

    private post(product: Product): Promise<Product> {
        let headers = new Headers({
            'x-access-token': localStorage.getItem("_token")
        });

        return this.http
            .post(this.productsUrl, JSON.stringify(product), { headers: headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(product: Product) {
        let headers = new Headers({
            'x-access-token': localStorage.getItem("_token")
        });


        let url = `${this.productsUrl}/${product._id}`;

        return this.http
            .put(url, JSON.stringify(product), { headers: headers })
            .toPromise()
            .then(() => product)
            .catch(this.handleError);
    }

    delete(product: Product) {
        let headers = new Headers({
            'x-access-token': localStorage.getItem("_token")
        });

        let url = `${this.productsUrl}/${product._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}