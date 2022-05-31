import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { Corte } from '../models/Corte.model';

@Injectable({
  providedIn: 'root',
})
export class CorteService {
  constructor(private angularFire: AngularFirestore) {}

  /**
   * GetAllCortesDeCaja
   */
  public GetAllCortesDeCaja() {
    return this.angularFire
      .collection<Corte>(`corte`)
      .valueChanges({ idField: 'id' });
  }

  /**
   * GetCorteById
   */
  public GetCorteById(uid: string) {
    return this.angularFire
      .doc<Corte>(`corte/${uid}`)
      .valueChanges({ idField: 'id' });
  }

  /**
   * GenerateCorte
   */
  public GenerateCorte(data: Corte) {
    const generateID: string = this.angularFire.createId();
    return this.angularFire.doc<Corte>(`corte/${generateID}`).set({
      caja: data.caja,
      contado: data.contado,
      calculado: data.calculado,
      diferencia: data.diferencia,
      usuario: data.usuario,
      fecha: serverTimestamp(),
    });
  }
}
