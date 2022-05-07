import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Menu } from 'src/app/models/Menu.model';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ModalProductsComponent } from 'src/app/shared/components/modal-products/modal-products.component';


@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class OrdenesComponent implements OnInit {

  columnsToDisplay = ['id', 'name', 'description', 'price', 'status'];
  expandedElement!: PeriodicElement | null;
  data: (Menu & { id: string })[] = [];

  constructor(private ordersService: OrdenesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ordersService.GetAllOrders().subscribe((data) =>{
      this.data = data
    })
  }

  //modal
  openDialog(){
    this.dialog.open(ModalProductsComponent);
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

