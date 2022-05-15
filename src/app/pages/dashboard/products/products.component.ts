import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Img, ITable, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { inventario } from 'src/app/models/Inventario.model';
import { InventarioService } from 'src/app/services/inventario.service';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ModalProductsComponent } from 'src/app/shared/components/modal-products/modal-products.component';
import { ExcelCustomService } from 'src/app/services/excel-custom.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'stock',
    'actions',
  ];
  // data = new MatTableDataSource<inventario>();
  data = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private serviceInventario: InventarioService, private dialog: MatDialog, private excelService: ExcelCustomService) {}

  ngOnInit(): void {
    this.serviceInventario.getAllProducts().subscribe((products: any) => {
      this.data = products;
    });
  }

  //paginator



  //delete
  public deleteProduct(id: string) {
    if (window.confirm('Esta seguro de eliminar el producto?')) {
      this.serviceInventario.deleteProduct(id);
      alert('Producto eliminado exitosamente');
    }
  }
  //pdf
  public async generatePDF() {
    console.log('click');
    const pdf = new PdfMakeWrapper();

    pdf.add(
      await new Img(
        'https://media-cdn.tripadvisor.com/media/photo-s/03/56/15/3b/mariscos-playa-azul.jpg'
      )
        .height(50)
        .width(60)
        .build()
    );

    pdf.add(new Txt('Inventario').bold().end);
    pdf.add(this.createTablePDF(this.data));

    pdf.create().open();
  }

  public createTablePDF(dataPDF: inventario[]): ITable {
    return new Table([
      ['CODE', 'Nombre', 'Marca', 'Descripcion', 'Stock'],
      ...this.extracData(dataPDF),
    ]).end;
  }

  public extracData(data: inventario[]) {
    return data.map((row) => [
      row.id,
      row.name,
      row.brand,
      row.description,
      row.stock,
    ]);
  }

  //modal
    openDialog(){
    this.serviceInventario.initializedFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
      this.dialog.open(ModalProductsComponent);
    }

    //edit
    onEdit(row:any){
      this.serviceInventario.populateForm(row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(ModalProductsComponent,dialogConfig);
    }

    exportAsXLSX() {
      this.excelService.exportToExcel(this.data, 'my_export');
    }
}
