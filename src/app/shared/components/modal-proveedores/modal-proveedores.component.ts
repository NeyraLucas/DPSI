import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Proveedores } from 'src/app/models/Proveedores.model';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-modal-proveedores',
  templateUrl: './modal-proveedores.component.html',
  styleUrls: ['./modal-proveedores.component.scss'],
})
export class ModalProveedoresComponent implements OnInit {
  constructor(public service:ProveedoresService, public dialogRef: MatDialogRef<ModalProveedoresComponent>) {}

  ngOnInit(): void {}

  public async createItemMenu(product: FormGroup): Promise<void>{
    const inventario: Proveedores = product.value;
    try{
      await this.service.createNewProveedor(inventario);
      console.log(product.value);
      alert('Producto agregado correctamente');
      this.onClose();
    }catch(err){
      window.alert(err)
    }
  }

  onClose() {
    this.service.productForm.reset();
    this.service.initializedFormGroup();
    this.dialogRef.close();
  }

}
