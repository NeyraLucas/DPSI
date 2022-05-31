import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ModalProductsComponent } from './components/modal-products/modal-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ModalMenuComponent } from './components/modal-menu/modal-menu.component';
import { ModalProveedoresComponent } from './components/modal-proveedores/modal-proveedores.component';
import { ModalVentasComponent } from './components/modal-ventas/modal-ventas.component';
import {MatButtonModule} from '@angular/material/button';
import { ModalCorteComponent } from './components/modal-corte/modal-corte.component';
import { ModalSearchComponent } from './components/modal-search/modal-search.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ModalInformeCajaComponent } from './components/modal-informe-caja/modal-informe-caja.component';


@NgModule({
  declarations: [
    SidebarComponent,
    ModalProductsComponent,
    ModalMenuComponent,
    ModalProveedoresComponent,
    ModalVentasComponent,
    ModalCorteComponent,
    ModalSearchComponent,
    ModalInformeCajaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[
    SidebarComponent,
    ModalProductsComponent
  ]
})
export class SharedModule { }
