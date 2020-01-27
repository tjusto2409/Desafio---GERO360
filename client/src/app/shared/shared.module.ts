import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { InputFieldComponent } from './components/input-field/input-field.component';
import { TableComponent } from './components/table/table.component';
import { KeysPipe } from './pipes/keys.pipe';
import { ErrorControlComponent } from './components/error-control/error-control.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    TableComponent,
    KeysPipe,
    ErrorControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    InputFieldComponent,
    TableComponent
  ]
})
export class SharedModule { }
