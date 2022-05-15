import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { inventario } from 'src/app/models/Inventario.model';
import { InventarioService } from 'src/app/services/inventario.service';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-modal-products',
  templateUrl: './modal-products.component.html',
  styleUrls: ['./modal-products.component.scss'],
})
export class ModalProductsComponent implements OnInit {
  constructor(
    public service: InventarioService,
    public dialogRef: MatDialogRef<ModalProductsComponent>,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {}

  public async createProduct(product: FormGroup): Promise<void> {
    const inventario: inventario = product.value;
    try {
      await this.service.addNewProduct(inventario);
      console.log(product.value);
      this.toast.success({detail:"Success", summary:`Producto agregado correctamente`, duration:5000})
      this.onClose();
    } catch (err) {
      this.toast.error({detail:"Error", summary:`Error: ${err}`, duration:5000})
    }
  }

  onClose() {
    this.service.productForm.reset();
    this.service.initializedFormGroup();
    this.dialogRef.close();
  }
}
