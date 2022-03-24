import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/models/Menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.scss']
})
export class ShowMenuComponent implements OnInit {

  public menu$!: Observable<Array<Menu>>;
  constructor(private serviceMenu: MenuService) { }

  ngOnInit(): void {
    this.menu$ = this.serviceMenu.showMenuAll();
  }

}
