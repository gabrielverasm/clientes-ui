import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesformComponent } from './clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';


@NgModule({
    declarations: [
        ClientesformComponent,
        ClientesListaComponent
    ],
    imports: [
        CommonModule,
        ClientesRoutingModule,
        FormsModule
    ],
    exports: [
        ClientesformComponent,
        ClientesListaComponent
    ]
})
export class ClientesModule { }
