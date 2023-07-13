import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  titulo = "Clientes";
  clientesForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
  });

  dataClients:any[] = [];
  listFields:string[] = ['#','Cedula','Nombre','Apellido','Fecha Nacimiento','Telefono','Correo']
  columns: any[] = [
    {field: '_id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    {field: 'apellido', title: 'Apellido'},
    {field: 'fechaNacimiento', title: 'Fecha Nacimiento'},
    {field: 'telefono', title: 'Telefono'},
    {field: 'correo', title: 'Correo'}
  ];

  constructor(private clienteService:ClienteService) { 
    this.loadClientes();
  }

  ngOnInit(): void {
  }

  cliente : Cliente = {
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    telefono: '',
    correo: ''
  }

  nombre:string = '';
  apellido:string = '';
  fechaNacimiento:string = '';
  telefono:string = '';
  correo:string = '';

  loadClientes(){
    this.clienteService.loadClients().subscribe(data => {
      this.dataClients = data;
      console.log(this.dataClients);
    }), (error: any) => {
      console.log(error)
    }
  }

  borrarCampos(){
    this.clientesForm.reset();
  }

  deleteCliente(rowId: string) {
    this.clienteService.deleteClient(rowId).subscribe(() => {
      this.loadClientes();
    });
  }

  onSubmit(){
    this.clienteService.saveClient(new Cliente(this.nombre,this.apellido,
      this.fechaNacimiento,this.telefono, this.correo)).subscribe(() => {
      this.loadClientes();
      this.borrarCampos();
    }), (error: any) => {
      console.log(error)
    }
  }
  

}
