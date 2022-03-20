import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { inventario } from '../models/Inventario.model';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  constructor(private readonly angularFire: AngularFirestore) {}

  // public getAllProducts(){
  //   return this.angularFire.collection<inventario>('inventario').valueChanges({idField:'id'});
  // }

  public getAllProducts() {
    // const dataInv = (inv: Array<inventario>) =>{
    //   const data= [];

    //   for(let i=0; i<inv.length; i++){
    //     data[i] = inv;
    //   }

    //   return data;
    // }

    return this.angularFire
      .collection<inventario>('inventario')
      .valueChanges({ idField: 'id' })
      .pipe(map( dataInv => (dataInv)
      ));
  }

  public addNewProduct(product: inventario){
    const generateID:string = this.angularFire.createId();
    return this.angularFire.doc<inventario>(`inventario/${generateID}`).set(product,{merge:true})
  }

  public deleteProduct(id: string){
    return this.angularFire.doc<inventario>(`inventario/${id}`).delete();
  }

  /**
   * updateProduct
   */
  public updateProduct(data:inventario) {
    return this.angularFire.doc<inventario>(`inventario/${data.id}`).set(data, { merge: true });
  }

  /**
   * sizeCollection
   */
  public sizeCollection() {
    return this.angularFire.collection('inventario').get();
  }

}
