import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ventas } from 'src/app/models/Ventas.model';
import { MatTableDataSource } from '@angular/material/table';
import { ModalVentasComponent } from 'src/app/shared/components/modal-ventas/modal-ventas.component';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class OrdenesComponent implements OnInit {
  columnsToDisplay = ['id', 'fecha', 'price', 'status', 'actions'];
  //expandedElement!: PeriodicElement | null;
  data: (Ventas & { id: string })[] = [];
  dataVentas!: (Ventas & { id: string }) | undefined;
  dataSource = new MatTableDataSource(this.data);
  total: number = 0;
  constructor(
    private ordersService: OrdenesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.ordersService.GetAllOrdersVentas().subscribe((data) => {
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
      // console.log(this.data);
      //this.getTotal();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(uid: string) {
    this.ordersService.GetVentasById(uid).pipe(take(1)).subscribe((data) => {
      this.dataVentas = data;
      const dialogRef = this.dialog.open(ModalVentasComponent, {
        width: '20%',
        data: this.dataVentas,
      });
    });
  }

  // getTotal(){
  //   this.data.map((sum) =>{
  //     sum.productos.map((x) =>{
  //       this.total += x.price;
  //     })
  //   })
  // }
}
