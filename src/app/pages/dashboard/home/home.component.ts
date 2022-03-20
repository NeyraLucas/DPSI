import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { inventario } from 'src/app/models/Inventario.model';
import { AuthService } from 'src/app/services/auth.service';
import { InventarioService } from 'src/app/services/inventario.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public inventario$!: Observable<Array<inventario>>;
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'stock',
    'actions',
  ];
  data = [];
  sizeInventary!:number;

  constructor(
    private readonly authF: AuthService,
    private serviceInventario: InventarioService
  ) {}

  ngOnInit(): void {
    // this.inventario$ = this.serviceInventario.getAllProducts();

    //view trable
    this.serviceInventario.getAllProducts().subscribe((products: any) => {
      this.data = products;
    });
    
    this.showSize();

  }

  public  deleteProduct(id: string) {
    // try {
    //   await if(window.confirm('Esta seguro de eliminar el producto?')){
    //     this.serviceInventario.deleteProduct(id);
    //     alert('Producto eliminado exitosamente');
    //     this.showSize();
    //   } 
      
    // } catch (err) {
    //   window.alert(err);
    // }
    
    if(window.confirm('Esta seguro de eliminar el producto?')){
        this.serviceInventario.deleteProduct(id);
        alert('Producto eliminado exitosamente');
        this.showSize();
      } 
  
  }

  public showSize(){
    // size
    this.serviceInventario.sizeCollection().subscribe( size =>{
      this.sizeInventary = size.size;
    });
  }

}
