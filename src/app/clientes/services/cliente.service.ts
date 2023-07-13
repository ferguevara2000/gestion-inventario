import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = '/api/clientes/';

  constructor(private http:HttpClient) { }

  loadClients(): Observable<any>{
    return this.http.get(this.url);
  }

  loadClient(id: string): Observable<any>{
    return this.http.get(this.url+id);
  }

  saveClient(cliente:Cliente): Observable<any>{
    return this.http.post(this.url, cliente);
  }

  updateClient(id:string, cliente:Cliente): Observable<any>{
    return this.http.put(this.url+id, cliente);
  }

  deleteClient(id: string): Observable<any>{
    return this.http.delete(this.url+id);
  }
}
