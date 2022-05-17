import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Ventas } from 'src/app/models/Ventas.model';
import { MatTableDataSource } from '@angular/material/table';
import { ModalVentasComponent } from 'src/app/shared/components/modal-ventas/modal-ventas.component';


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

  columnsToDisplay = ['id', 'fecha', 'price', 'status', 'actions'];
  //expandedElement!: PeriodicElement | null;
  data: (Ventas & { id: string })[] = [];
  dataSource = new MatTableDataSource(this.data);
  constructor(private ordersService: OrdenesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ordersService.GetAllOrdersVentas().subscribe((data) =>{
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
      console.log(this.data);

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    console.log(id);

    this.dialog.open(ModalVentasComponent);
  }
}

