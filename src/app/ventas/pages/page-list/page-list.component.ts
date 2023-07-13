import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/clientes/services/cliente.service';
import { EmpleadosService } from 'src/app/empleados/services/empleados.service';
import { Producto } from 'src/app/productos/models/producto.model';
import { ProductosService } from 'src/app/productos/services/productos.service';
import { Venta } from '../../models/venta.model';
import { VentaService } from '../../services/venta.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  titulo: string = "Ventas";
  pasajesForm = new FormGroup({
    cliente: new FormControl(''),
    empleado: new FormControl(''),
    producto: new FormControl(''),
    total: new FormControl('')
  });
  opcionSeleccionado: string = '0';
  rutaSeleccionado: string = '0';
  costoSeleccionado: string = '0';
  verSeleccion: string = '';
  verSeleccionRuta: string = '';
  verSeleccionCosto: string = '';
  dataEmpleados:any[] = [];
  dataClientes:any[] = [];
  dataProductos:any[] = [];
  dataVentas:any[] = [];
  columns: any[] = [
    { field: '_id', title: 'ID' },
    { field: 'cliente', title: 'Cliente' },
    {field: 'empleado', title: 'Empleado'},
    {field: 'venta', title: 'Venta'},
    {field: 'creationDate', title: 'Fecha'}
  ];

  constructor(private empleadoService:EmpleadosService, private clienteService:ClienteService
    , private productoService:ProductosService, private ventasService:VentaService) {  
    this.loadEmpleados();
    this.loadClientes();
    this.loadProductos();
    this.loadVentas();
  }

  ngOnInit(): void {
  }

  venta : Venta = {
    cliente: '',
    empleado: '',
    producto: '',
    precio: ''
  }

  empleado:string = '';
  cliente:string = '';
  productos:string = '';

  loadEmpleados(){
    this.empleadoService.loadEmpleados().subscribe(data => {
      this.dataEmpleados = data;
    }), (error: any) => {
      console.log(error)
    }
  }

  loadClientes(){
    this.clienteService.loadClients().subscribe(data => {
      this.dataClientes = data;
      console.log(this.dataClientes);
    }), (error: any) => {
      console.log(error)
    }
  }

  loadProductos(){
    this.productoService.loadProductos().subscribe(data => {
      this.dataProductos = data;
      console.log(this.dataProductos);
    }), (error: any) => {
      console.log(error)
    }
  }

  loadVentas(){
    this.ventasService.loadVentas().subscribe(data => {
      this.dataVentas = data;
    }), (error: any) => {
      console.log(error)
    }
  }


  borrarCampos(){
    this.pasajesForm.reset();
  }

  capturar(){
    this.verSeleccion = this.opcionSeleccionado.toString();
  }

  capturarRuta(){
    this.verSeleccionRuta = this.rutaSeleccionado.toString();
  }

  capturarCosto(){
    this.verSeleccionCosto = this.costoSeleccionado.toString();
  }

  deleteCliente(rowId: string){
    this.ventasService.deleteVentas(rowId).subscribe(() => {
      this.loadVentas();
    }), (error: any) => {
      console.log(error)
    }
  } 
  
  onSubmit(){
    this.ventasService.saveVenta(new Venta(this.verSeleccion,this.verSeleccionRuta,this.verSeleccionCosto, "0")).subscribe(() => {
      this.loadVentas();
      this.borrarCampos();
    }), (error: any) => {
      console.log(error)
    }
  }

}
