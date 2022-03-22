import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap, take } from 'rxjs';
import { Menu } from 'src/app/models/Menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent implements OnInit {
  public menu$!: Observable<Menu>;
  public productForm: FormGroup = new FormGroup({
    name: new FormControl(undefined, [Validators.required, Validators.minLength(3)]),
    price: new FormControl(undefined,[Validators.required]),
    status: new FormControl(undefined,[Validators.required]),
    description: new FormControl(undefined,[Validators.required]),
    image: new FormControl(undefined,[Validators.required]),
    id: new FormControl(undefined, [Validators.required]),
  });

  constructor(private readonly route: Router, private readonly serviceMenu: MenuService,private activateRoute: ActivatedRoute,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.showMenu();
  }

  public showMenu(){
    this.menu$ = this.activateRoute.params.pipe(
      map((params) => params['id']),
      switchMap((id: string) =>
        this.firestore
          .doc<Menu>(`menu/${id}`)
          .valueChanges({ idField: 'id' })
      )
    ) as Observable<Menu>;

    this.menu$.pipe(take(1)).subscribe((data) => {
      if (data) {
        this.productForm.patchValue(data);
      }
    });
  }

  editMenu(menu: FormGroup){
    const menus: Menu = menu.value;
    try{
      this.serviceMenu.updateMenu(menus);
      alert('Producto actualizado');
      this.route.navigateByUrl('admin/home/menu');
    }catch(err){
      window.alert(err);
    }
  }

}
