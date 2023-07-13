import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  url = '/api/ventas/';

  constructor(private http:HttpClient) { }

  loadVentas(): Observable<any>{
    return this.http.get(this.url);
  }

  saveVenta(cliente:Venta): Observable<any>{
    return this.http.post(this.url, cliente);
  }

  deleteVentas(id: string): Observable<any>{
    return this.http.delete(this.url+id);
  }
}
