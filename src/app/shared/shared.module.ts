import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ModalProductsComponent } from './components/modal-products/modal-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ModalMenuComponent } from './components/modal-menu/modal-menu.component';
import { ModalProveedoresComponent } from './components/modal-proveedores/modal-proveedores.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ModalProductsComponent,
    ModalMenuComponent,
    ModalProveedoresComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports:[
    SidebarComponent,
    ModalProductsComponent
  ]
})
export class SharedModule { }
