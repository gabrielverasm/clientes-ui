import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesformComponent } from './clientes-form/clientes-form.component'
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [
    { path: 'clientes-form', component: ClientesformComponent, },
    { path: 'clientes-form/:id', component: ClientesformComponent, },
    { path: 'clientes-lista', component: ClientesListaComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule { }
