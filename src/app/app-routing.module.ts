import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { MenuComponent } from './pages/customer/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditComponent } from './pages/dashboard/edit/edit.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { NewProductComponent } from './pages/dashboard/new-product/new-product.component';
import { ProductsComponent } from './pages/dashboard/products/products.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'home/products/new',
        component: NewProductComponent,
      },
      {
        path: 'home/products/edit/:id',
        component: EditComponent,
      },
      {
        path: 'home/products',
        component: ProductsComponent,
      },

    ],
  },
  {
    path: 'menu',
    component: MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
