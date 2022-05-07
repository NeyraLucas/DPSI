import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";
import { inventario } from 'src/app/models/Inventario.model';
import { InventarioService } from 'src/app/services/inventario.service';


@Component({
  selector: 'app-modal-products',
  templateUrl: './modal-products.component.html',
  styleUrls: ['./modal-products.component.scss']
})
export class ModalProductsComponent implements OnInit {
  constructor(public service:InventarioService,
    public dialogRef: MatDialogRef<ModalProductsComponent>) { }

  ngOnInit(): void {
  }

  public async createProduct(product: FormGroup): Promise<void>{
    const inventario: inventario = product.value;
    try{
      await this.service.addNewProduct(inventario);
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
