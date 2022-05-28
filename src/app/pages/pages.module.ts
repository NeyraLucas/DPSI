import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { NewProductComponent } from './dashboard/new-product/new-product.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './dashboard/products/products.component';
import { MenuComponent } from './customer/menu/menu.component';
import { MenuAdminComponent } from './dashboard/menu-admin/menu-admin.component';
import { ShowMenuComponent } from './dashboard/menu-admin/show-menu/show-menu.component';
import { EditMenuComponent } from './dashboard/menu-admin/edit-menu/edit-menu.component';
import { AddMenuComponent } from './dashboard/menu-admin/add-menu/add-menu.component';
import { EditComponent } from './dashboard/edit/edit.component';
import { ProveedoresComponent } from './dashboard/proveedores/proveedores.component';
import { PuntoDeVentaComponent } from './dashboard/punto-de-venta/punto-de-venta.component';

import { OrdenesComponent } from './dashboard/ordenes/ordenes.component';
import { NavMenuComponent } from './customer/nav-menu/nav-menu.component';
import { MenuCategoriaComponent } from './customer/menu-categoria/menu-categoria.component';
import { PrincipalComponent } from './customer/menu/principal/principal.component';
import { EmpleadosComponent } from './dashboard/empleados/empleados.component';

// Angular material
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CorteDeCajaComponent } from './dashboard/corte-de-caja/corte-de-caja.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    NewProductComponent,
    HomeComponent,
    EditComponent,
    ProductsComponent,
    MenuComponent,
    MenuAdminComponent,
    ShowMenuComponent,
    EditMenuComponent,
    AddMenuComponent,
    ProveedoresComponent,
    PuntoDeVentaComponent,
    OrdenesComponent,
    NavMenuComponent,
    MenuCategoriaComponent,
    PrincipalComponent,
    EmpleadosComponent,
    CorteDeCajaComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    LoginComponent,
    NewProductComponent,
    HomeComponent
  ]
})
export class PagesModule { }
