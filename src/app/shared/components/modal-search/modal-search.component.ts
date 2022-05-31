import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Corte } from 'src/app/models/Corte.model';
import { ModalInformeCajaComponent } from '../modal-informe-caja/modal-informe-caja.component';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.scss'],
})
export class ModalSearchComponent implements OnInit {
  displayedColumns: string[] = [
    'fecha',
    'caja',
    'contado',
    'calculado',
    'diferencia',
    'usuario',
  ];
  dataSource = new MatTableDataSource<Corte>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Corte[],
    public dialogRef: MatDialogRef<ModalSearchComponent>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Corte>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  test(row: Corte) {
    console.log(row);
    this.onClose();
    const dialogModal = this.dialog.open(ModalInformeCajaComponent,{
      width: '50%',
      data: row
    });
  }
}
