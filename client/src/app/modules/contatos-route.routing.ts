import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';

const routes: Routes = [
  {path: '', redirectTo: 'contatos', pathMatch: 'full'},
  {path: 'contatos', component: ContatosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosModulesRoutingModule { }
