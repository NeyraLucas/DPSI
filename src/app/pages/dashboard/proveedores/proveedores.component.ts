import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Proveedores } from 'src/app/models/Proveedores.model';
import { ExcelCustomService } from 'src/app/services/excel-custom.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ModalProveedoresComponent } from 'src/app/shared/components/modal-proveedores/modal-proveedores.component';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss'],
})
export class ProveedoresComponent implements OnInit {
  data: (Proveedores & {
    id: string;
  })[] = [];
  displayedColumns: string[] = [
    'ID',
    'Nombre',
    'Empresa',
    'Numero',
    'Email',
    'Estado',
    'Acciones',
  ];
  constructor(private serviceProveedores: ProveedoresService, private dialog: MatDialog, private excelService: ExcelCustomService) {}

  ngOnInit(): void {
    this.serviceProveedores.getAllProveedores().subscribe(
      (
        proveedores: (Proveedores & {
          id: string;
        })[]
      ) => {
        console.log(proveedores);
        this.data = proveedores;
      }
    );
  }


  openDialog() {
    this.serviceProveedores.initializedFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ModalProveedoresComponent);
  }

  exportAsXLSX(){
    this.excelService.exportToExcel(this.data, 'my_export');
  }
}
