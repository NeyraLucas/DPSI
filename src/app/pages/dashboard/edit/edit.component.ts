import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of, switchMap, take } from 'rxjs';
import { inventario } from 'src/app/models/Inventario.model';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  public product$!: Observable<inventario>;

  public productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    brand: new FormControl(undefined, [Validators.required]),
    code: new FormControl(undefined, [Validators.required]),
    description: new FormControl(undefined, [Validators.required]),
    stock: new FormControl(undefined, [Validators.required]),
  });
  public isCreation$: Observable<boolean> = of(true);
  constructor(
    private route: Router,
    private activateRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    private readonly serviceInventary: InventarioService
  ) {}

  ngOnInit(): void {

    this.showProducts();
   
  }

  public showProducts(){
    this.isCreation$ = this.activateRoute.params.pipe(
      map((params) => (params['id'] ? false : true))
    );
    this.isCreation$.subscribe(console.log);
    this.product$ = this.isCreation$.pipe(
      switchMap((componentInvokationType) =>{
        if(!componentInvokationType){
          return this.activateRoute.params.pipe(
              map((params) => params['id']),
              switchMap((id: string) =>
                this.firestore
                  .doc<inventario>(`inventario/${id}`)
                  .valueChanges({ idField: 'id' })
              )
            ) as Observable<inventario>;
        }
        return of(null);
      })
    ) as Observable<inventario>;

    this.product$.pipe(take(1)).subscribe((data) => {
        if (data) {
          this.productForm.patchValue(data);
        }
      });

    // this.product$ = this.activateRoute.params.pipe(
    //   map((params) => params['id']),
    //   switchMap((id: string) =>
    //     this.firestore
    //       .doc<inventario>(`inventario/${id}`)
    //       .valueChanges({ idField: 'id' })
    //   )
    // ) as Observable<inventario>;

    // this.product$.pipe(take(1)).subscribe((data) => {
    //   if (data) {
    //     this.productForm.patchValue(data);
    //   }
    // });
  }

  public async editProduct(product: FormGroup) {
    const products: inventario = product.value;
    // this.isCreation$.pipe(take(1)).subscribe(async (isCreation) => {
    //   if (isCreation) {
    //     console.log('Es true ' + isCreation);
        
    //     products.id = this.firestore.createId();
    //   }
    //   try {
    //     await this.serviceInventary.updateProduct(products);
    //     alert('Producto actualizado');
    //     this.route.navigateByUrl('admin');
    //   } catch (err) {
    //     window.alert(err);
    //   }
    // });

    try {
          await this.serviceInventary.updateProduct(products);
          alert('Producto actualizado');
          this.route.navigateByUrl('admin');
        } catch (err) {
          window.alert(err);
        }
  }
}
