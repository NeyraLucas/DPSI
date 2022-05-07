import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/models/Menu.model';
import { MenuService } from 'src/app/services/menu.service';
import { ModalMenuComponent } from 'src/app/shared/components/modal-menu/modal-menu.component';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.scss'],
})
export class ShowMenuComponent implements OnInit {
  public menu$!: Observable<Array<Menu>>;
  constructor(private serviceMenu: MenuService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.menu$ = this.serviceMenu.showMenuAll();
  }

  //modal
  openDialog() {
    this.serviceMenu.initializedFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ModalMenuComponent);
  }
}
