import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/models/Menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menu$!: Observable<Array<Menu>>;
  constructor(private serviceMenu: MenuService) { }

  ngOnInit(): void {
    this.showMenu();
  }

  showMenu(){
    return this.menu$=this.serviceMenu.showMenuOrderByStatus();
  }

}
