import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { take } from 'rxjs';
import { Ventas } from 'src/app/models/Ventas.model';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { ModalCorteComponent } from 'src/app/shared/components/modal-corte/modal-corte.component';

@Component({
  selector: 'app-corte-de-caja',
  templateUrl: './corte-de-caja.component.html',
  styleUrls: ['./corte-de-caja.component.scss']
})
export class CorteDeCajaComponent implements OnInit {
  total: number = 0;
  dataVentas : number =0;
  constructor(private dialog: MatDialog, private serviceOrdenes: OrdenesService) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.total = 0;
    this.serviceOrdenes.GetAllOrdersVentas().pipe(take(1)).subscribe((data) => {
      data.map((x) => {
              this.total += x.price;
      });
      this.dataVentas = this.total;
      const dialogRef = this.dialog.open(ModalCorteComponent, {
        width: '50%',
        data: this.dataVentas,
      });
    });
  }

  // public getTotal() {
  //   this.serviceOrdenes
  //   .GetAllOrdersVentas()
  //     .pipe(take(1))
  //     .subscribe((data) => {
  //       data.map((x) => {
  //         this.total += x.price;
  //       });


  //     });
  // }


}
