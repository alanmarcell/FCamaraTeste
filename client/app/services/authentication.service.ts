import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from "../models/user";


@Injectable()
export class AuthenticationService {
    token: any;
    private tokenAuthenticationUrl = 'api/authenticateToken';
    private userAuthenticationUrl = 'api/authenticateUser';  // URL to web api

    constructor(private http: Http) {
        this.token = localStorage.getItem("_token");

    }

    getToken() {
        console.log(this.token);
    }

    logout() {
        localStorage.setItem("_token", "");
    }

    authenticateUser(user: User): Promise<JSON> {
        return this.postUser(user);
    }


    authenticateToken(token): Promise<void> {

        return this.postToken(token);
    }

    private postUser(user: User): Promise<JSON> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.userAuthenticationUrl, JSON.stringify(user), { headers: headers })
            .toPromise()
            .then(response => {
                this.token = response.json().token;
                localStorage.setItem("_token", response.json().token);
                return this.token;
            })
            .catch(this.handleError);
    }

    private postToken(token): Promise<void> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.tokenAuthenticationUrl, JSON.stringify(token), { headers: headers })
            .toPromise()
            .then(response => {
            })
            .catch(this.handleError);
    }



    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}