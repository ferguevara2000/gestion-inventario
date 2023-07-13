import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Producto } from '../../models/producto.model';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  titulo = "Productos";
  productosForm = new FormGroup({
    nombre: new FormControl(''),
    marca: new FormControl(''),
    stock: new FormControl(''),
    precio: new FormControl('')
  });

  dataClients:any[] = [];
  listFields:string[] = ['#','Cedula','Nombre','Apellido','Fecha Nacimiento','Telefono','Correo']
  columns: any[] = [
    {field: '_id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    {field: 'marca', title: 'Marca'},
    {field: 'stock', title: 'Stock'},
    {field: 'precio', title: 'Precio'},
  ];

  constructor(private productoService:ProductosService) { 
    this.loadClientes();
  }

  ngOnInit(): void {
  }

  cliente : Producto = {
    nombre: '',
    marca: '',
    stock: 0,
    precio: 0
  }

  nombre:string = '';
  marca:string = '';
  stock:Number = 0;
  precio:Number = 0;

  loadClientes(){
    this.productoService.loadProductos().subscribe(data => {
      this.dataClients = data;
      console.log(this.dataClients);
    }), (error: any) => {
      console.log(error)
    }
  }

  borrarCampos(){
    this.productosForm.reset();
  }

  deleteCliente(rowId: string) {
    console.log(rowId);
    console.log('ELiminando', rowId);
    this.productoService.deleteProducto(rowId).subscribe(() => {
      this.loadClientes();
    });
  }

  onSubmit(){
    this.productoService.saveProducto(new Producto(this.nombre,this.marca,
      this.stock,this.precio)).subscribe(() => {
      this.loadClientes();
      this.borrarCampos();
    }), (error: any) => {
      console.log(error)
    }
  }

}
