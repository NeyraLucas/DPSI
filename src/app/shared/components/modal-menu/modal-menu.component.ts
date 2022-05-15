import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Menu } from 'src/app/models/Menu.model';
import { MenuService } from 'src/app/services/menu.service';
import { ModalProductsComponent } from '../modal-products/modal-products.component';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrls: ['./modal-menu.component.scss'],
})
export class ModalMenuComponent implements OnInit {
  constructor(
    public service: MenuService,
    public dialogRef: MatDialogRef<ModalProductsComponent>,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {}

  public async createItemMenu(product: FormGroup): Promise<void> {
    const inventario: Menu = product.value;
    try {
      await this.service.createNewItemMenu(inventario);
      console.log(product.value);
      this.toast.success({
        detail: 'Success',
        summary: `Producto agregado correctamente`,
        duration: 5000,
      });
      this.onClose();
    } catch (err) {
      this.toast.error({
        detail: 'Error',
        summary: `Error: ${err}`,
        duration: 5000,
      });
    }
  }

  onClose() {
    this.service.productForm.reset();
    this.service.initializedFormGroup();
    this.dialogRef.close();
  }
}
