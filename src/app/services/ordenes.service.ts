import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { Menu } from '../models/Menu.model';
import { OrdenesPago } from '../models/Ordenes.model';
import { Ventas, VentasUnit } from '../models/Ventas.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private angularFire: AngularFirestore) { }

  public CreateOrder(data:Menu[], total:number){
    const generateID:string = this.angularFire.createId();
    return this.angularFire.doc<Ventas>(`ordenes/${generateID}`).set({
      id: generateID,
      price:total,
      productos:data,
      status: "no pagado",
      fecha: serverTimestamp()
    });
  }
  public CreateOrderTest(data:Menu[], total:number){
    // let time = this.angularFire.
    const generateID:string = this.angularFire.createId();
    return this.angularFire.doc<Ventas>(`testordenes/${generateID}`).set({
      id: generateID,
      price:total,
      productos:data,
      status: "no pagado",
      fecha: serverTimestamp()

    });
  }

  public GetAllOrders(){
    return this.angularFire.collection<Menu>(`ordenes`).valueChanges({idField:'id'});
  }
  public GetAllOrdersVentas(){
    return this.angularFire.collection<Ventas>(`ordenes`).valueChanges({idField:'id'});
  }
  public GetAllOrdersVentasTest(){
    return this.angularFire.collection<Ventas>(`testordenes`).valueChanges({idField:'id'});
  }

  /**
   * GetVentasById
   */
  public GetVentasById(uid: string) {
    return this.angularFire.doc<Ventas>(`ordenes/${uid}`).valueChanges({idField:'id'});
  }

  /**
   * SizeOrders
   */
  public SizeOrders() {
    return this.angularFire.collection('ordenes').get();
  }

  /**
   * GenerarVenta
   */
  public GenerarVenta(data:number,uidVenta:string) {

    this.angularFire.doc(`ordenes/${uidVenta}`).set({status:"pagado"},{merge:true});

    const generateID:string = this.angularFire.createId();
    return this.angularFire.doc(`ventas/${generateID}`).set({price:data},{merge:true});
  }

  /**
   * GetTotalDeVentas
   */
  public GetTotalDeVentas() {
    return this.angularFire.collection<VentasUnit>('ventas').valueChanges();
  }

}
