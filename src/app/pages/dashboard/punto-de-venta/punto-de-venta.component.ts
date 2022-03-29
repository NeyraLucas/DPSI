import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto-de-venta',
  templateUrl: './punto-de-venta.component.html',
  styleUrls: ['./punto-de-venta.component.scss']
})
export class PuntoDeVentaComponent implements OnInit {

  selectedValue!: string;

  foods: any = [
    {value: 'steak-0', viewValue: 'Efectivo'},
    {value: 'pizza-1', viewValue: 'Tarjeta'},
    {value: 'tacos-2', viewValue: 'Paypal'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
