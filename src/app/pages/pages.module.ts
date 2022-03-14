import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
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



@NgModule({
  declarations: [
    ProductsComponent,
    LoginComponent,
    DashboardComponent,
    NewProductComponent,
    HomeComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule
    
  ],
  exports:[
    ProductsComponent,
    LoginComponent,
    NewProductComponent,
    HomeComponent
  ]
})
export class PagesModule { }
