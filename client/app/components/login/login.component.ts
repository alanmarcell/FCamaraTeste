import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from "../../models/user";

import { AuthenticationService } from "../../services/authentication.service";

@Component({
    selector: 'fc-login',
    templateUrl: './app/components/login/login.component.html',
    styleUrls: ['./app/components/login/login.component.css']
})

export class LoginComponent {
    @Input() user: User;
    error: any;
    token: any;


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
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
