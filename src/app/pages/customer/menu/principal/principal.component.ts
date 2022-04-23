import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/Categories';
import { Menu } from 'src/app/models/Menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public menu$!: Observable<Array<Menu>>;
  public categorias$!: Observable<Array<Categories>>;
  public pupularProduct$!: Observable<Array<Menu>>;
  constructor(private serviceMenu: MenuService) { }

  ngOnInit(): void {
    this.showMenu();
    this.popularProducts();
  }

  showMenu(){
    return this.categorias$=this.serviceMenu.getCategories();
  }

  popularProducts(){
    return this.pupularProduct$ = this.serviceMenu.showMenuOrderByStatus();
  }
}
