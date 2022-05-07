import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Proveedores } from '../models/Proveedores.model';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  constructor(private af: AngularFirestore) {}

  /**
   * getAllProveedores
   */
  public getAllProveedores() {
    return this.af
      .collection<Proveedores>('proveedores')
      .valueChanges({ idField: 'id' });
  }

  /**
   * createNewProveedor
   */
  public createNewProveedor(item: Proveedores) {
    const generateID: string = this.af.createId();
    return this.af
      .doc<Proveedores>(`proveedores/${generateID}`)
      .set(item, { merge: true });
  }

  //inicializar form

  public productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    empresa: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    alter_number: new FormControl('', [Validators.required]),
    number_fijo: new FormControl('', [Validators.required]),
  });

  initializedFormGroup() {
    this.productForm.setValue({
      name: '',
      empresa: '',
      email: '',
      phone: '',
      estado: '',
      ciudad: '',
      status: '',
      id: '',
      alter_number: '',
      number_fijo: '',
    });
  }
}
