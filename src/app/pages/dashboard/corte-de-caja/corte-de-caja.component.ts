import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { take } from 'rxjs';
import { Corte } from 'src/app/models/Corte.model';
import { Ventas } from 'src/app/models/Ventas.model';
import { CorteService } from 'src/app/services/corte.service';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { ModalCorteComponent } from 'src/app/shared/components/modal-corte/modal-corte.component';
import { ModalSearchComponent } from 'src/app/shared/components/modal-search/modal-search.component';

@Component({
  selector: 'app-corte-de-caja',
  templateUrl: './corte-de-caja.component.html',
  styleUrls: ['./corte-de-caja.component.scss'],
})
export class CorteDeCajaComponent implements OnInit {
  total: number = 0;
  dataVentas: number = 0;
  dataCorte!: (Corte & { id: string; })[]
  constructor(
    private dialog: MatDialog,
    private serviceOrdenes: OrdenesService,
    private serviceCorte: CorteService
  ) {}

  ngOnInit(): void {
  }
  openDialog() {
    this.total = 0;
    this.serviceOrdenes
      .GetAllOrdersVentasTest()
      .pipe(take(1))
      .subscribe((data) => {
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

  openDialogSearch() {
    this.serviceCorte.GetAllCortesDeCaja().pipe(take(1)).subscribe((data) =>{
      this.dataCorte = data;
      const dg = this.dialog.open(ModalSearchComponent, {
        width: '50%',
        data: this.dataCorte,
      });
    });
  }

}
