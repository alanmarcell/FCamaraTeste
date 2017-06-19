import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {
  headers: Headers;
  constructor(private http: Http) {
    this.getHeaders();
  }

  get(url) {
    this.getHeaders();
    return this.http.get(url, {
      headers: this.headers
    });
  }

  post(url, data) {
    this.getHeaders();
    return this.http.post(url, data, {
      headers: this.headers
    });
  }
  put(url, data) {
    this.getHeaders();
    return this.http.put(url, data, {
      headers: this.headers
    });
  }
  delete(url) {
    this.getHeaders();
    return this.http.delete(url, {
      headers: this.headers
    });
  }

  private getHeaders() {
    this.headers = new Headers({
      'x-access-token': localStorage.getItem('_token'),
      'Content-Type': 'application/json'
    });
  }
}
