import { Injectable } from '@angular/core';

import { HttpClient } from '../httpClient';
import { Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from "../models/user";


@Injectable()
export class AuthService {
    private authenticated: boolean = false;
    private token: string;
    private expires: any = 0;
    private userInfo: any = {};
    private windowHandle: any = null;
    private intervalId: any = null;
    private expiresTimerId: any = null;
    private loopCount = 600;
    private intervalLength = 100;
    private userAuthenticationUrl = 'api/authenticateUser';  // URL to web api

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem("_token");
    }

    getToken() {
        console.log(this.token);
    }

    logout() {
        this.doLogout();
    }

    authenticateUser(user: User): Promise<JSON> {
        return this.postUser(user);
    }

    private postUser(user: User): Promise<JSON> {
        return this.http
            .post(this.userAuthenticationUrl, JSON.stringify(user))
            .toPromise()
            .then(response => {
                this.token = response.json().token;
                var expiresSeconds = Number(response.json().expiresIn);
                console.log(response.json());
                if (this.token) {
                    this.authenticated = true;
                    this.startExpiresTimer(expiresSeconds);
                    this.expires = new Date();
                    this.expires = this.expires.setSeconds(this.expires.getSeconds() + expiresSeconds);
                }
                localStorage.setItem("_token", this.token);
                return this.token;
            })
            .catch(this.handleError);
    }

    private startExpiresTimer(seconds: number) {
        if (this.expiresTimerId != null) {
            clearTimeout(this.expiresTimerId);
        }
        this.expiresTimerId = setTimeout(() => {
            console.log('Session has expired');
            this.doLogout();
        }, seconds * 1000); // seconds * 1000
        console.log('Token expiration timer set for', seconds, "seconds");
    }

    
    public isAuthenticated() {
        return this.authenticated;
    }

    public doLogout() {
        this.authenticated = false;
        this.expiresTimerId = null;
        this.expires = 0;
        this.token = null;
        console.log('Session has been cleared');
    }


    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}