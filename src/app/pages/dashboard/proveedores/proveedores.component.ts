import { Component, OnInit } from '@angular/core';
import { Proveedores } from 'src/app/models/Proveedores.model';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss'],
})
export class ProveedoresComponent implements OnInit {
  data: (Proveedores & {
    id: string;
  })[] = [];
  displayedColumns: string[] = [
    'ID',
    'Nombre',
    'Empresa',
    'Numero',
    'Email',
    'Estado',
    'Acciones',
  ];
  constructor(private serviceProveedores: ProveedoresService) {}

  ngOnInit(): void {
    this.serviceProveedores.getAllProveedores().subscribe(
      (
        proveedores: (Proveedores & {
          id: string;
        })[]
      ) => {
        console.log(proveedores);
        this.data = proveedores;
      }
    );
  }
}
