import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Menu } from '../models/Menu.model';
import { OrdenesPago } from '../models/Ordenes.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private angularFire: AngularFirestore) { }

  public CreateOrder(data:any){
    const generateID:string = this.angularFire.createId();
    // const example:Menu[] = data.map((obj) => {return Object.assign({},obj)} );
    // return this.angularFire.doc<OrdenesPago>(`ordenes/${generateID}`).set(Object.assign({}, data));
    // return this.angularFire.doc<OrdenesPago>(`ordenes/${generateID}`).set(data,{merge:true});
    // return this.angularFire.doc<Menu[]>(`ordenes/${generateID}`).set(data.menuArr,{merge:true});
    console.log("Example:"+data);

    // return this.angularFire.doc<Menu[]>(`ordenes/${generateID}`).set(example,{merge:true});
    return this.angularFire.doc<any>(`ordenes/${generateID}`).set({
      name: data.menuArr[0].name
    });
  }

  public GetAllOrders(){
    return this.angularFire.collection<Menu>(`ordenes`).valueChanges({idField:'id'});
  }

  /**
   * SizeOrders
   */
  public SizeOrders() {
    return this.angularFire.collection('ordenes').get();
  }

}
