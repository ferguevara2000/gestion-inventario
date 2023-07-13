import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url = '/api/productos/';

  constructor(private http:HttpClient) { }

  loadProductos(): Observable<any>{
    return this.http.get(this.url);
  }

  loadProducto(id: string): Observable<any>{
    return this.http.get(this.url+id);
  }

  saveProducto(producto:Producto): Observable<any>{
    return this.http.post(this.url, producto);
  }

  deleteProducto(id: string): Observable<any>{
    return this.http.delete(this.url+id);
  }
}
