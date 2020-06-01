import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
    selector: 'app-clientes-form',
    templateUrl: './clientes-form.component.html',
    styleUrls: ['./clientes-form.component.css']
})
export class ClientesformComponent implements OnInit {

    cliente: Cliente;
    success: boolean = false;
    errors: String[];
    id: number;

    constructor(
        private service: ClientesService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.cliente = new Cliente();
    }

    ngOnInit(): void {
        let params: Observable<Params> = this.activatedRoute.params;
        params.subscribe(urlParams => {
            this.id = urlParams['id'];
            if (this.id) {
                this.service
                    .getClienteById(this.id)
                    .subscribe(
                        cliente => this.cliente = cliente,
                        errorCliente => {
                            this.errors = ["Cliente não encontrado, tente novamente!"];
                            this.success = false;
                        });
            }
        })
    }

    voltarListagem() {
        this.router.navigate(['/clientes-lista']);
    }

    onSubmit() {
        if (this.id) {
            this.service
                .update(this.cliente)
                .subscribe(response => {
                    this.success = true;
                    this.errors = null;
                }, errorResponse => {
                    this.errors = ["Erro ao editar o cliente, tente novamente!"];
                    this.success = false;
                });
        } else {
            this.service.save(this.cliente)
                .subscribe(response => {
                    this.success = true;
                    this.cliente = response;
                    this.errors = null;
                }, errorResponse => {
                    this.errors = errorResponse.error.errors;
                    this.success = false;
                });
        }
    }

}
