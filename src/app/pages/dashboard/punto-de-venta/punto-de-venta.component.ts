import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/models/Menu.model';
import { OrdenesPago } from 'src/app/models/Ordenes.model';
import { MenuService } from 'src/app/services/menu.service';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-punto-de-venta',
  templateUrl: './punto-de-venta.component.html',
  styleUrls: ['./punto-de-venta.component.scss'],
})
export class PuntoDeVentaComponent implements OnInit {
  displayedColumns: string[] = ['imagen', 'nombre', 'desc', 'costo'];
  dataSource: (Menu & { id: string })[] = [];
  clickedRows: Menu[] = [];
  total: number = 0;
  subTotal: number = 0;
  dataMenu!: Menu;
  selectedValue!: string;
  dataMenu$!: Observable<Array<Menu>>;

  foods: any = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
  ];

  constructor(
    private readonly sMenu: MenuService,
    private route: Router,
    private ordersService: OrdenesService
  ) {}

  ngOnInit(): void {
    this.sMenu.showMenuAll().subscribe((data) => {
      this.dataSource = data;
    });
  }

  public test(data: Menu) {
    this.total++;
    this.subTotal += data.price;
  }

  public payMenu() {
    const men:any = this.clickedRows;
    try {
      this.ordersService.CreateOrder(men);
      console.log("Ordenes:");
      //console.log(men);

      window.alert('Producto ordenado');
      this.route.navigateByUrl('admin');
    } catch (err) {
      window.alert(err);
    }
  }
}
