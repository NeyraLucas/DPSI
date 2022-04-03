import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/models/Menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-punto-de-venta',
  templateUrl: './punto-de-venta.component.html',
  styleUrls: ['./punto-de-venta.component.scss']
})
export class PuntoDeVentaComponent implements OnInit {

  displayedColumns: string[] = ['imagen', 'nombre', 'desc', 'costo'];
  dataSource: (Menu & { id: string; })[] = [];
  clickedRows = new Set<Menu>();
  total: number = 0;

  selectedValue!: string;
  dataMenu$!: Observable<Array<Menu>>;

  foods: any = [
    {value: 'steak-0', viewValue: 'Efectivo'},
    {value: 'pizza-1', viewValue: 'Tarjeta'},
    {value: 'tacos-2', viewValue: 'Paypal'},
  ];


  constructor(private readonly sMenu:MenuService) { }

  ngOnInit(): void {
     this.sMenu.showMenuAll().subscribe(
       (data) => {
        this.dataSource =  data;
        console.log(this.dataSource);

       }
     )
  }

  public test(){

  }

}
