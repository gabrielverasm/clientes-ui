import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClientesService {

    constructor(
        private http: HttpClient,
    ) { }

    save(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>('http://localhost:8081/api/clientes', cliente);
    }

    update(cliente: Cliente): Observable<any> {
        return this.http.put<Cliente>(`http://localhost:8081/api/clientes/${cliente.id}`, cliente);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<Cliente>('http://localhost:8081/api/clientes/' + id);
    }

    getClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>('http://localhost:8081/api/clientes');
    }

    getClienteById(id: number): Observable<Cliente> {
        return this.http.get<Cliente>('http://localhost:8081/api/clientes/' + id);
    }

}
