import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Proveedores } from '../models/Proveedores.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private af: AngularFirestore) { }


  /**
   * getAllProveedores
   */
  public getAllProveedores() {
    return this.af.collection<Proveedores>('proveedores').valueChanges({idField:'id'});
  }

}
