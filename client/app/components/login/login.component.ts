import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'fc-login',
  templateUrl: './app/components/login/login.component.html',
  styleUrls: ['./app/components/login/login.component.css']
})

export class LoginComponent implements OnInit {
  @Input() user: User;
  error: any;
  token: any;

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = new User();
  }

  authenticate() {
    this.authenticationService
      .authenticateUser(this.user)
      .catch(error => this.error = error);
  }

  getToken() {
    this.authenticationService
      .getToken();

  }
}
