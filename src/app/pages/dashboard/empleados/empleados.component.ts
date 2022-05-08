import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Empleado } from 'src/app/models/Empleados.model';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})

export class EmpleadosComponent {
  displayedColumns: string[] = ['Foto', 'Nombre', 'Rol' ,'Correo', 'Telefono'];
  dataSource: Empleado[] = [...ELEMENT_DATA];
  @ViewChild(MatTable) table!: MatTable<Empleado>;


  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }


}


const ELEMENT_DATA: Empleado[] = [
  {
  name: "Leo S.",
  email: "prueba33@gmail.com",
  numero: 557846952,
  roles: {empleado_roles:"Cajero"},
  foto: "https://userstock.io/data/wp-content/uploads/2020/05/imansyah-muhamad-putera-n4KewLKFOZw-300x300.jpg",
  },
  {
  name: "Jorge M.",
  email: "prueba33@gmail.com",
  numero: 5574128745,
  roles: {empleado_roles:"Empleado de piso"},
  foto: "https://userstock.io/data/wp-content/uploads/2017/07/pexels-photo-26939-1-300x300.jpg",
  },
  {
  name: "Ana Maria",
  email: "prueba33@gmail.com",
  numero: 5548963574,
  roles: {empleado_roles:"Cocinero"},
  foto: "https://userstock.io/data/wp-content/uploads/2017/09/jason-blackeye-223584-300x300.jpg",
  },
];


