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



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    NewProductComponent,
    HomeComponent,
    EditComponent,
    ProductsComponent,
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
    MatGridListModule
    
  ],
  exports:[
    LoginComponent,
    NewProductComponent,
    HomeComponent
  ]
})
export class PagesModule { }
