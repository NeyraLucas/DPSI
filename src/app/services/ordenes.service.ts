import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Menu } from '../models/Menu.model';
import { OrdenesPago } from '../models/Ordenes.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private angularFire: AngularFirestore) { }

  public CreateOrder(data:OrdenesPago){
    const generateID:string = this.angularFire.createId();
    return this.angularFire.doc<OrdenesPago>(`ordenes/${generateID}`).set(data,{merge:true});
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
