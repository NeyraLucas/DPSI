import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Menu } from 'src/app/models/Menu.model';
import { MenuService } from 'src/app/services/menu.service';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-punto-de-venta',
  templateUrl: './punto-de-venta.component.html',
  styleUrls: ['./punto-de-venta.component.scss'],
})
export class PuntoDeVentaComponent implements OnInit {
  displayedColumns: string[] = ['imagen', 'nombre', 'desc', 'costo'];
  dataSource: (Menu & { id: string })[] = [];
  clickedRows: Menu[] = [];
  total: number = 0;
  subTotal: number = 0;
  dataMenu = new MatTableDataSource(this.dataSource);

  miFormulario = this.fb.group({
    ventas: this.fb.array([]),
  });

  constructor(
    private readonly sMenu: MenuService,
    private route: Router,
    private ordersService: OrdenesService,
    private toast: NgToastService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.sMenu.showMenuAll().subscribe((data) => {
      this.dataSource = data;
      this.dataMenu = new MatTableDataSource(this.dataSource);
    });
  }

  //Get ventas
  get ventas() {
    return this.miFormulario.controls['ventas'] as FormArray;
  }

  public test(data: Menu) {

    const ventasForms = this.fb.group({
      name: new FormControl(data.name, [Validators.required, Validators.min(0)]),
      image: new FormControl(data.image, [Validators.required, Validators.min(0)]),
      pieces: new FormControl(1, [Validators.required, Validators.min(0)]),
      price: new FormControl(data.price, [Validators.required, Validators.min(0)]),
      amount: new FormControl(data.price, [Validators.required, Validators.min(0)]),
    });

    this.ventas.push(ventasForms);

    this.total++;
    this.subTotal += data.price;
  }

  deleteItem(index:number){
    this.total--;
    this.subTotal -= this.ventas.at(index).get('price')?.value;
    this.ventas.removeAt(index);
  }

  public payMenu() {
    try {
      this.ordersService.CreateOrder(this.miFormulario.value, this.subTotal);
      this.toast.success({
        detail: 'Success',
        summary: `Producto ordenado`,
        duration: 5000,
      });
      this.route.navigateByUrl('admin');
    } catch (err) {
      window.alert(err);
    }
  }

  // Filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataMenu.filter = filterValue.trim().toLowerCase();
  }
}
