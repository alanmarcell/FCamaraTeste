import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  auth;
  constructor(auth: AuthService) {
    this.auth = auth;
  }

  canActivate() {
    return this.auth.isAuthenticated();
  }
}
