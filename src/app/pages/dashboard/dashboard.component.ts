import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { inventario } from 'src/app/models/Inventario.model';
import { AuthService } from 'src/app/services/auth.service';
import { InventarioService } from 'src/app/services/inventario.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent{

  public inventario$!: Observable<Array<inventario>>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  constructor(
    private readonly authF: AuthService,
  ) {}

  public exit() {
    this.authF.SafelogOut();
  }
}
