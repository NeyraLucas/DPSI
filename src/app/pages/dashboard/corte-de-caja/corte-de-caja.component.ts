import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalCorteComponent } from 'src/app/shared/components/modal-corte/modal-corte.component';

@Component({
  selector: 'app-corte-de-caja',
  templateUrl: './corte-de-caja.component.html',
  styleUrls: ['./corte-de-caja.component.scss']
})
export class CorteDeCajaComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    this.dialog.open(ModalCorteComponent);
  }


}
