import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Menu } from 'src/app/models/Menu.model';

@Component({
  selector: 'app-menu-categoria',
  templateUrl: './menu-categoria.component.html',
  styleUrls: ['./menu-categoria.component.scss'],
})
export class MenuCategoriaComponent implements OnInit {
  public menu$!: Observable<(Menu & { id: string })[]>;
  constructor(
    private activateRoute: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.showCategories();
  }

  public showCategories() {
    this.menu$ = this.activateRoute.params.pipe(
      map((params) => params['id']),
      switchMap((categoria: string) =>
        this.firestore
          .collection<Menu>(`menu`, (qn) =>
            qn.where('categoria', '==', categoria)
          )
          .valueChanges({ idField: 'id' })
      )
    ) as Observable<(Menu & { id: string })[]>;

    //this.menu$.subscribe(console.log);
  }
}
