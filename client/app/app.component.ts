import { Component } from '@angular/core';
import { AuthenticationService } from "./services/authentication.service";
@Component({
    selector: 'my-app',
    templateUrl: './app/app.html'
})

export class AppComponent {
    title = 'FCamara Teste';

    constructor(private authenticateService: AuthenticationService) { }


    logout() {
        this.authenticateService.logout();
    }
}