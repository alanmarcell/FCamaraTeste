import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/productDetail/product-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoggedInGuard } from './guards/loggedIn.guard';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'productDetail/:id',
    component: ProductDetailComponent,
    canActivate: [LoggedInGuard]
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
