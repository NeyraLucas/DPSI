import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NewProductComponent } from './dashboard/new-product/new-product.component';
import { HomeComponent } from './dashboard/home/home.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card';
import { EditComponent } from './dashboard/edit/edit.component'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './dashboard/products/products.component';
import { MenuComponent } from './customer/menu/menu.component';
import { MenuAdminComponent } from './dashboard/menu-admin/menu-admin.component';
import { ShowMenuComponent } from './dashboard/menu-admin/show-menu/show-menu.component';
import { EditMenuComponent } from './dashboard/menu-admin/edit-menu/edit-menu.component';
import { AddMenuComponent } from './dashboard/menu-admin/add-menu/add-menu.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProveedoresComponent } from './dashboard/proveedores/proveedores.component'; 


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
    MatCheckboxModule
    
  ],
  exports:[
    LoginComponent,
    NewProductComponent,
    HomeComponent
  ]
})
export class PagesModule { }
