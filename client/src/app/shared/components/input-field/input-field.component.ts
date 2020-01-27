import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() inputFields: any;
  @Input() formGroup: any;
  msgError: string = '';

  constructor() { }

  ngOnInit() {}  

  verificaValidTouched(campo, exception) {
    if(!this.formGroup.get(campo).valid && this.formGroup.get(campo).touched) {
      this.getMessageError(this.formGroup.get(campo).errors);
      return true;
    }
  }

  getMessageError(validators) {
    delete validators['Mask error'];
    const error = {
      email : 'Formato de email inválido',
      default : 'Campo Obrigatório'
    };

    Object.keys(validators).forEach(
      validator => this.msgError = (error[validator] || error['default'])
    );   
  }
}
