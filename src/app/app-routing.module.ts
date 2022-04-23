import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { MenuCategoriaComponent } from './pages/customer/menu-categoria/menu-categoria.component';
import { MenuComponent } from './pages/customer/menu/menu.component';
import { PrincipalComponent } from './pages/customer/menu/principal/principal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditComponent } from './pages/dashboard/edit/edit.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { AddMenuComponent } from './pages/dashboard/menu-admin/add-menu/add-menu.component';
import { EditMenuComponent } from './pages/dashboard/menu-admin/edit-menu/edit-menu.component';
import { MenuAdminComponent } from './pages/dashboard/menu-admin/menu-admin.component';
import { ShowMenuComponent } from './pages/dashboard/menu-admin/show-menu/show-menu.component';
import { NewProductComponent } from './pages/dashboard/new-product/new-product.component';
import { OrdenesComponent } from './pages/dashboard/ordenes/ordenes.component';
import { ProductsComponent } from './pages/dashboard/products/products.component';
import { ProveedoresComponent } from './pages/dashboard/proveedores/proveedores.component';
import { PuntoDeVentaComponent } from './pages/dashboard/punto-de-venta/punto-de-venta.component';
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
      {
        path: 'home/menu',
        component: MenuAdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'show',
            pathMatch: 'full'
          },
          {
            path: 'show',
            component: ShowMenuComponent,
          },
          {
            path: 'show/edit/:id',
            component: EditMenuComponent,
          },
          {
            path: 'show/add',
            component: AddMenuComponent,
          },
        ]
      },
      {
        path: 'home/proveedores',
        component: ProveedoresComponent,
      },
      {
        path: 'home/punto-de-venta',
        component: PuntoDeVentaComponent,
      },
      {
        path: 'home/ordenes',
        component: OrdenesComponent,
      },

    ],
  },
  {
    path: 'menu',
    component: MenuComponent,
    children:[
      {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full',
      },
      {
        path: 'principal',
        component: PrincipalComponent,
      },
      {
        path: 'principal/categoria/:id',
        component: MenuCategoriaComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
