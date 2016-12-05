import { Component } from '@angular/core';
import { AuthService } from "./services/auth.service";
@Component({
    selector: 'my-app',
    templateUrl: './app/app.html'
})

export class AppComponent {
    title = 'FCamara Teste';

    constructor(private authenticateService: AuthService) { }


    logout() {
        this.authenticateService.logout();
    }
}