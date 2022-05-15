import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Proveedores } from 'src/app/models/Proveedores.model';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-modal-proveedores',
  templateUrl: './modal-proveedores.component.html',
  styleUrls: ['./modal-proveedores.component.scss'],
})
export class ModalProveedoresComponent implements OnInit {
  constructor(public service:ProveedoresService, public dialogRef: MatDialogRef<ModalProveedoresComponent>, private toast: NgToastService) {}

  ngOnInit(): void {}

  public async createItemMenu(product: FormGroup): Promise<void>{
    const inventario: Proveedores = product.value;
    try{
      await this.service.createNewProveedor(inventario);
      console.log(product.value);
      this.toast.success({detail:"Success", summary:`Proveedor agregado correctamente`, duration:5000})
      this.onClose();
    }catch(err){
      this.toast.error({detail:"Error", summary:`Error: ${err}`, duration:5000})
    }
  }

  onClose() {
    this.service.productForm.reset();
    this.service.initializedFormGroup();
    this.dialogRef.close();
  }

}
