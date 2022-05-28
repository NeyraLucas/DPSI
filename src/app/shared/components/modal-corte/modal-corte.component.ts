import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-modal-corte',
  templateUrl: './modal-corte.component.html',
  styleUrls: ['./modal-corte.component.scss']
})
export class ModalCorteComponent implements OnInit {

  total: number = 0; // 0+5+5 = 10   ? + 5 + 5 = NaN
  constructor(private serviceOrdenes: OrdenesService) { }

  ngOnInit(): void {
    this.serviceOrdenes.GetTotalDeVentas().subscribe((data) =>{
      data.map((x) =>{
        this.total += x.price;
      })
    })
  }

}
