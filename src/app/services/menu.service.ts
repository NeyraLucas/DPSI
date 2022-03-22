import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Menu } from '../models/Menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private readonly angularFire: AngularFirestore) { }

  public showMenuOrderByStatus(){
    return this.angularFire.collection<Menu>('menu', (qn) => qn.where('status', '==',true)).valueChanges({idField:'id'})
  }

}
