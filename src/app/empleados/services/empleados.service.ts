import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  url = '/api/empleados/';

  constructor(private http:HttpClient) { }

  loadEmpleados(): Observable<any>{
    return this.http.get(this.url);
  }

  loadEmpleado(id: string): Observable<any>{
    return this.http.get(this.url+id);
  }

  saveEmpleados(empleado:Empleado): Observable<any>{
    return this.http.post(this.url, empleado);
  }
  
  deleteClient(id: string): Observable<any>{
    return this.http.delete(this.url+id);
  }
}
