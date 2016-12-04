import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {
    headers: Headers;
    constructor(private http: Http) {
        this.getHeaders();
    }

    private getHeaders() {
        this.headers = new Headers({
            'x-access-token': localStorage.getItem("_token")
        });
    }

    get(url) {
        this.getHeaders();
        return this.http.get(url, {
            headers: this.headers
        });
    }
}