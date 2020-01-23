import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosModulesRoutingModule } from './contatos-route.routing';

import { ContatosComponent } from './contatos/contatos.component';

@NgModule({
  declarations: [
    ContatosComponent
  ],
  imports: [
    CommonModule,
    ContatosModulesRoutingModule
  ],
  exports: [
    ContatosComponent
  ]
})
export class ContatosModulesModule { }
