import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, take } from 'rxjs';
import { inventario } from 'src/app/models/Inventario.model';
import { VentasTest, VentasUnit } from 'src/app/models/Ventas.model';
import { AuthService } from 'src/app/services/auth.service';
import { InventarioService } from 'src/app/services/inventario.service';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public inventario$!: Observable<Array<inventario>>;

  sizeInventary!: number;
  sizeInventaryMenu!: number;
  sizeOrders!: number;
  sizeVentas$!: Observable<VentasUnit[]>;
  prueba: number = 0;

  constructor(
    private readonly authF: AuthService,
    private serviceInventario: InventarioService,
    private serviceOrders:OrdenesService
  ) {}

  ngOnInit(): void {
    this.ShowData();
  }

  public ShowData() {
    // size
    this.serviceInventario.sizeCollection().subscribe((size) => {
      this.sizeInventary = size.size;
    });

    // size Menu
    this.serviceInventario.sizeCollectionMenu().subscribe((size) => {
      this.sizeInventaryMenu = size.size;
    });

    // size Orders
    this.serviceOrders.SizeOrders().subscribe((size) => {
      this.sizeOrders = size.size;
    });

    //size Ventas
    this.sizeVentas$ = this.serviceOrders.GetTotalDeVentas();
    this.prueba = 0;
    this.sizeVentas$.pipe(take(1)).subscribe((data) =>{
      data.map((x) =>{ this.prueba +=  x.price })
    })

  }

}
