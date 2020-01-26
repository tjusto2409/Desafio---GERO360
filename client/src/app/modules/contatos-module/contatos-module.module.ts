import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosModulesRoutingModule } from './contatos-route.routing';
import { SharedModule } from '../../shared/shared.module';
import { ContatosComponent } from './contatos/contatos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContatosService } from './contatos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ContatosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContatosModulesRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    ContatosService
  ],
  exports: [
    ContatosComponent
  ]
})
export class ContatosModulesModule { }
