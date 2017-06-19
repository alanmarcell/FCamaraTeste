import { Injectable } from '@angular/core';
import { HttpClient } from '../httpClient';
import 'rxjs/add/operator/toPromise';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class ProductService {

  private allProductsUrl = 'api/products';
  private oneProductUrl = 'api/product';  // URL to web api

  constructor(private http: HttpClient, private router: Router, private location: Location) { }

  getProducts(start: number, items: number): Promise<Product[]> {
    const pagination = {
      start,
      items
    };

    return this.http
      .post(this.allProductsUrl, JSON.stringify(pagination))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
    // return this.http.get(this.allProductsUrl)
    //   .toPromise()
    //   .then(response => {
    //     return response.json();
    //   })
    //   .catch(this.handleError);
  }

  getAllProducts() {
    return this.http.get(this.allProductsUrl)
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(this.handleError);
  }
  getProduct(id: string): Promise<Product> {

    return this.http.get(this.oneProductUrl + '/' + id)
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

  delete(product: Product) {

    let url = `${this.oneProductUrl}/${product._id}`;

    return this.http
      .delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  private post(params: object): Promise<any> {

    return this.http
      .post(this.oneProductUrl, JSON.stringify(params))
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private put(product: Product) {

    let url = `${this.oneProductUrl}/${product._id}`;

    return this.http
      .put(url, JSON.stringify(product))
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    if (error.status === 403) {
      // this.location.replaceState('/');
      this.router.navigate(['/login']);
    }
    console.error('An error occurred', error.status);

    return Promise.reject(error.message || error);
  }
}
