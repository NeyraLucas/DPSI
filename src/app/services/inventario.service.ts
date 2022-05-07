import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { inventario } from '../models/Inventario.model';
// import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  constructor(private readonly angularFire: AngularFirestore) {}

  public getAllProducts() {
    return this.angularFire
      .collection<inventario>('inventario')
      .valueChanges({ idField: 'id' })
      .pipe(map((dataInv) => dataInv));
  }

  public addNewProduct(product: inventario) {
    const generateID: string = this.angularFire.createId();
    return this.angularFire
      .doc<inventario>(`inventario/${generateID}`)
      .set(product, { merge: true });
  }

  public deleteProduct(id: string) {
    return this.angularFire.doc<inventario>(`inventario/${id}`).delete();
  }

  /**
   * updateProduct
   */
  public updateProduct(data: inventario) {
    return this.angularFire
      .doc<inventario>(`inventario/${data.id}`)
      .set(data, { merge: true });
  }

  /**
   * sizeCollection
   */
  public sizeCollection() {
    return this.angularFire.collection('inventario').get();
  }

  /**
   * sizeCollection of menu
   */
  public sizeCollectionMenu() {
    return this.angularFire.collection('menu').get();
  }

  //inicializar form

  public productForm: FormGroup = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
    ]),
    brand: new FormControl(undefined, [Validators.required]),
    code: new FormControl(undefined, [Validators.required]),
    description: new FormControl(undefined, [Validators.required]),
    stock: new FormControl(undefined, [Validators.required]),
  });

  initializedFormGroup() {
    this.productForm.setValue({
      name: '',
      brand: '',
      code: '',
      description: '',
      stock: '',
    });
  }

  //form edit
  populateForm(product:any){
    //this.productForm.setValue(product,'departmentName');
  }
}
