import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, take } from 'rxjs';
import { Corte } from 'src/app/models/Corte.model';
import { VentasUnit } from 'src/app/models/Ventas.model';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-modal-informe-caja',
  templateUrl: './modal-informe-caja.component.html',
  styleUrls: ['./modal-informe-caja.component.scss']
})
export class ModalInformeCajaComponent implements OnInit {
  sizeVentas$!: Observable<VentasUnit[]>;
  prueba: number = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Corte, private serviceOrders:OrdenesService) { }

  ngOnInit(): void {

    //size Ventas
    this.sizeVentas$ = this.serviceOrders.GetTotalDeVentas();
    this.prueba = 0;
    this.sizeVentas$.pipe(take(1)).subscribe((data) =>{
      data.map((x) =>{ this.prueba +=  x.price })
    })
  }



}
