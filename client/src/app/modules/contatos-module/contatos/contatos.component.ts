import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContatosService } from '../contatos.service';
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  title: string;
  form: FormGroup;
  index: number;
  buttonsForm = [
    {value : 'Gravar', id: 1},
    {value: 'Atualizar', id: 2}
  ];
  button = this.buttonsForm[0];

  inputFields = [
    {class: 'col-8', id: 'nome', label: 'Nome', type: 'text', control: 'nome'},
    {class: 'col-4', id: 'dtNascimento', label: 'Data de Nascimento', type: 'text', mask: '00/00/0000', control: 'dtNascimento'},
    {class: 'col-3', id: 'celular', label: 'Celular', type: 'text', mask: '+00 (00) 00000-0000', control: 'celular'},
    {class: 'col-9', id: 'email', label: 'E-mail', type: 'text', control: 'email'}
  ]; 

  contatos: any = [];

  table: any = {
    class: 'col-12',
    th: ['Nome', 'Nascimento', 'Celular', 'Email'],
    td: []
  };

  constructor(private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private contatoService: ContatosService) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.title = data.title);
    this.form = this.formBuilder.group({
      nome: [''],
      dtNascimento: [null],
      celular: [null],
      email: ['']
    });

    this.getContatos();    
  }

  getContatos() {
    this.contatoService.getContatos().subscribe(
      (contatos: Array<any>) => {
        this.contatos.push(...contatos);
        this.contatos.forEach(
          contato => {
            this.table.td.push(this.contatoService.generatorContato(contato));
          }
        );
      },
      err => console.error(err)
    );
  }

  editar(index) {
    this.button = this.buttonsForm[1];
    this.index = index;
    this.form.setValue(this.contatoService.generatorContato(this.contatos[index]));
  }

  excluir(tr) {
    this.contatoService
        .deleteContato(this.contatos[tr.index].id)
        .subscribe(
          result => {
            if(result > 0) {
              tr.row.style.display = 'none';
              this.contatos.splice(tr.index, 1);
            }
          },

          error => console.error(error)
        );
  }

  resetar() {
    this.form.reset();
    this.button = this.buttonsForm[0];
  }

  onSubmit() {
    if(this.button.id == 1) {
      this.contatoService
          .saveContato(this.form.value)
          .subscribe(
            result => {
              this.contatos.push(this.form.value);
              this.table.td.push(this.form.value);
              this.resetar();           
            },
            error => console.error(error)
          )
    }
    
    if(this.button.id == 2) {
      let contatoUpdate = this.contatos[this.index];

      this.contatoService
          .updateContato(contatoUpdate.id, this.form.value)
          .subscribe(
            result => {
              Object.keys(this.form.value).map(
                control => {
                  contatoUpdate[control] = this.form.value[control];
                  this.table.td[this.index][control] = this.form.value[control]
                });
                this.resetar();                         
            }
          )
    }
  }

}
