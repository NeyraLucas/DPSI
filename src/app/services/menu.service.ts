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
  public showMenuAll(){
    return this.angularFire.collection<Menu>('menu').valueChanges({idField:'id'});
  }

  //create menu item
  public createNewItemMenu(item: Menu){
    const generateID:string = this.angularFire.createId();
    return this.angularFire.doc<Menu>(`menu/${generateID}`).set(item,{merge:true})
  }

  //update
  public updateMenu(data:Menu) {
    return this.angularFire.doc<Menu>(`menu/${data.id}`).set(data, { merge: true });
  }

}
