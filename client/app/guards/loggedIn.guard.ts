import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  auth: AuthService;
  constructor(auth: AuthService) {
    this.auth = auth;
  }

  canActivate = () => this.auth.isAuthenticated();
}
