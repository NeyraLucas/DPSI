import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource = new MatTableDataSource<Proveedores>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private serviceProveedores: ProveedoresService, private dialog: MatDialog, private excelService: ExcelCustomService) {}

  ngOnInit(): void {
    this.serviceProveedores.getAllProveedores().subscribe(
      (
        proveedores: (Proveedores & {
          id: string;
        })[]
      ) => {
        this.data = proveedores;
        this.dataSource = new MatTableDataSource<Proveedores>(proveedores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
