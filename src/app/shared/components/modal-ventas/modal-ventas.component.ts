import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { Ventas } from 'src/app/models/Ventas.model';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-modal-ventas',
  templateUrl: './modal-ventas.component.html',
  styleUrls: ['./modal-ventas.component.scss']
})
export class ModalVentasComponent implements OnInit {
  total!:number;
  constructor(
    public dialogRef: MatDialogRef<ModalVentasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ventas,
    private serviceOrders: OrdenesService,
    private toast: NgToastService
  ) { }

  ngOnInit(): void {
    this.total = 0;
    this.data.productos.map((data)=>{
      this.total += data.price
    });
  }

  cancelar(){
    this.dialogRef.close();
  }

  pagar(){
    try{
      this.serviceOrders.GenerarVenta(this.total, this.data.id);
      this.toast.success({detail:"Success", summary:`Se ha pagado ${this.total}`, duration:5000});
      this.dialogRef.close();
    }catch(err){
      this.toast.error({detail:"Error Pay", summary:`Error al pagar: ${err}`, duration:5000})

    }
  }

}
