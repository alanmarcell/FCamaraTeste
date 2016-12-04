import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClient} from './httpClient';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductDetailComponent } from './components/productDetail/product-detail.component';

import { ProductService } from './services/product.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  providers: [
    AuthenticationService,
    ProductService,
    UserService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
