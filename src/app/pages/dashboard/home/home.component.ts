import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Img, ITable, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { Observable } from 'rxjs';
import { inventario } from 'src/app/models/Inventario.model';
import { AuthService } from 'src/app/services/auth.service';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public inventario$!: Observable<Array<inventario>>;

  sizeInventary!: number;

  constructor(
    private readonly authF: AuthService,
    private serviceInventario: InventarioService
  ) {}

  ngOnInit(): void {


    this.showSize();
  }

  public showSize() {
    // size
    this.serviceInventario.sizeCollection().subscribe((size) => {
      this.sizeInventary = size.size;
    });
  }


}
