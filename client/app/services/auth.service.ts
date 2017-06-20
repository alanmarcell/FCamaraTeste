import { Injectable } from '@angular/core';
import { HttpClient } from '../httpClient';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private authenticated: boolean = false;
  private token: string;
  private expires: any = 0;
  private expiresTimerId: any = null;
  private userAuthenticationUrl = 'api/authenticateUser';  // URL to web api

  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem('_token');
  }

  getToken() {
    console.log(this.token);
  }

  logout() {
    this.authenticated = false;
    this.expiresTimerId = null;
    this.expires = 0;
    this.token = null;
    this.router.navigate(['/login']);
  }

  authenticateUser(user: User): Promise<any> {
    return this.postUser(user).then(() => this.router.navigate(['products']));
  }

  public isAuthenticated() {
    return this.authenticated;
  }

  public doLogout() {
    this.logout();
    alert('Seu token expirou, faça login novamente');
    console.log('Session has been cleared');
  }

  private postUser(user: User): Promise<string> {
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
        localStorage.setItem('_token', this.token);
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
    console.log('Token expiration timer set for', seconds, 'seconds');
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
