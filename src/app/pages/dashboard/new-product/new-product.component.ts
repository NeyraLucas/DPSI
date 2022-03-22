import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { inventario } from 'src/app/models/Inventario.model';
import { InventarioService } from 'src/app/services/inventario.service';




@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent  {
  public productForm: FormGroup = new FormGroup({
    name: new FormControl(undefined, [Validators.required, Validators.minLength(3)]),
    brand: new FormControl(undefined,[Validators.required]),
    code: new FormControl(undefined,[Validators.required]),
    description: new FormControl(undefined,[Validators.required]),
    stock: new FormControl(undefined,[Validators.required]),
  });
  constructor( private readonly serviceInventario: InventarioService, private readonly route: Router) { }

  public async createProduct(product: FormGroup): Promise<void>{
    const inventario: inventario = product.value;
    try{
      await this.serviceInventario.addNewProduct(inventario); 
      console.log(product.value);
      alert('Producto agregado correctamente');
      this.route.navigateByUrl('admin');

    }catch(err){
      window.alert(err)
    }
  }


}
