import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-clientes-lista',
    templateUrl: './clientes-lista.component.html',
    styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

    clientes: Cliente[] = [];
    clienteSelecionado: Cliente;
    msgSuccess: string;
    msgError: string;

    constructor(
        private service: ClientesService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.service
            .getClientes()
            .subscribe(response => this.clientes = response);
    }


    novoCadastro() {
        this.router.navigate(['/clientes-form']);
    }

    preparaDelecao(cliente: Cliente) {
        this.clienteSelecionado = cliente;
    }

    deletarCliente() {
        this.service
            .delete(this.clienteSelecionado.id)
            .subscribe(response => {
                this.msgSuccess = " excluído com sucesso!";
                this.msgError = null;
                this.ngOnInit();
            }, errorResponse => {
                this.msgError = "Erro ao excluir o cliente, tente novamente!";
                this.msgSuccess = null;
            });
    }
}
