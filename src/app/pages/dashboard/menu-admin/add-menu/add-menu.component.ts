import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/Categories';
import { Menu } from 'src/app/models/Menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit{
  Categoria$!: Observable<(Categories & { id: string; })[] >;
  public productForm: FormGroup = new FormGroup({
    name: new FormControl(undefined, [Validators.required, Validators.minLength(3)]),
    price: new FormControl(undefined,[Validators.required]),
    status: new FormControl(undefined,[Validators.required]),
    description: new FormControl(undefined,[Validators.required]),
    image: new FormControl(undefined,[Validators.required]),
    categoria: new FormControl(undefined,[Validators.required]),
  });

  constructor(private readonly route: Router, private readonly serviceMenu: MenuService) { }

  ngOnInit(): void {
    this.Categoria$ = this.serviceMenu.getCategories();
  }

  public async createItemMenu(product: FormGroup): Promise<void>{
    const inventario: Menu = product.value;
    try{
      await this.serviceMenu.createNewItemMenu(inventario);
      console.log(product.value);
      alert('Producto agregado correctamente');
      this.route.navigateByUrl('admin');

    }catch(err){
      window.alert(err)
    }
  }

}
