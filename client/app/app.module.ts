import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClient } from './httpClient';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductDetailComponent } from './components/productDetail/product-detail.component';

import { LoggedInGuard } from './guards/loggedIn.guard';

import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    ReactiveFormsModule
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
    AuthService,
    ProductService,
    UserService,
    HttpClient,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
