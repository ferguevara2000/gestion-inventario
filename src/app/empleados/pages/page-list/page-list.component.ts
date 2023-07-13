import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Empleado } from '../../models/empleado.model';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  titulo = "Empleados";
  empleadosForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    cargo: new FormControl(''),
    telefono: new FormControl(''),
    salario: new FormControl(''),
  });

  dataClients:any[] = [];
  listFields:string[] = ['#','Cedula','Nombre','Apellido','Fecha Nacimiento','Telefono','Correo']
  columns: any[] = [
    {field: '_id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    {field: 'apellido', title: 'Apellido'},
    {field: 'cargo', title: 'Cargo'},
    {field: 'telefono', title: 'Telefono'},
    {field: 'salario', title: 'Salario'}
  ];

  constructor(private empleadoService:EmpleadosService) { 
    this.loadClientes();
  }

  ngOnInit(): void {
  }

  cliente : Empleado = {
    nombre: '',
    apellido: '',
    cargo: '',
    telefono: '',
    salario: 0
  }

  nombre:string = '';
  apellido:string = '';
  cargo:string = '';
  telefono:string = '';
  salario:Number = 0;

  loadClientes(){
    this.empleadoService.loadEmpleados().subscribe(data => {
      this.dataClients = data;
      console.log(this.dataClients);
    }), (error: any) => {
      console.log(error)
    }
  }

  borrarCampos(){
    this.empleadosForm.reset();
  }

  deleteCliente(rowId: string) {
    console.log(rowId);
    console.log('ELiminando', rowId);
    this.empleadoService.deleteClient(rowId).subscribe(() => {
      this.loadClientes();
    });
  }

  onSubmit(){
    this.empleadoService.saveEmpleados(new Empleado(this.nombre,this.apellido,
      this.cargo,this.telefono, this.salario)).subscribe(() => {
      this.loadClientes();
      this.borrarCampos();
    }), (error: any) => {
      console.log(error)
    }
  }

}
