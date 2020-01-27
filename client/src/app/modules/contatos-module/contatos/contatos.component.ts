import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContatosService } from '../contatos.service';
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  title: string;
  loading = false;
  form: FormGroup;
  index: number;
  buttonsForm = [
    {value : 'Gravar', id: 1},
    {value: 'Atualizar', id: 2}
  ];
  button = this.buttonsForm[0];

  inputFields = [
    {class: 'col-8', id: 'nome', label: 'Nome', type: 'text', control: 'nome', placeholder: ''},
    {class: 'col-4', id: 'dtNascimento', label: 'Data de Nascimento', 
      type: 'text', mask: '00/00/0000', control: 'dtNascimento', placeholder: 'dd/mm/YYYY'},
    {class: 'col-3', id: 'celular', label: 'Celular', type: 'text', 
      mask: '+00 (00) 00000-0000', control: 'celular', placeholder: '+00 (00) 00000-0000'},
    {class: 'col-9', id: 'email', label: 'E-mail', type: 'text', control: 'email', placeholder: ''}
  ]; 

  contatos: any = [];
  alterTable: any = ['id', 'createdAt', 'updatedAt'];

  table: any = {
    class: 'col-12',
    th: ['Nome', 'Nascimento', 'Celular', 'Email'],
    td: this.contatos
  };

  constructor(private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private contatoService: ContatosService) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.title = data.title);

    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      dtNascimento: [null, Validators.required],
      celular: [null, Validators.required],
      email: [null, [
        Validators.required,
        Validators.email
      ]]
    });

    this.getContatos();
  }

  getContatos() {
    this.loading = true;

    this.contatoService.getContatos().subscribe(
      (contatos: Array<any>) => {
        contatos = contatos.map(contato => {
          contato.dtNascimento = this.contatoService.dateFormat(contato.dtNascimento);
          return contato;
        });

        this.contatos.push(...contatos);
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
      }
    );
  }

  editar(index) {
    this.button = this.buttonsForm[1];
    this.index = index;
    Object.keys(this.form.controls)
          .map(control => {
            this.form.get(control)
                    .setValue(this.contatos[this.index][control]);
          });
  }

  excluir(index) {
    this.loading = true;

    this.contatoService
        .deleteContato(this.contatos[index].id)
        .subscribe(
          result => {
            if(result > 0) {
              this.loading = false;
              this.contatos.splice(index, 1);
            }
          },
          error => {
            this.loading = false;
            console.error(error);
          }
        );
  }

  cadastrar() {
    this.loading = true;
    this.contatoService
          .saveContato(this.form.value)
          .subscribe(
            contato => {
              contato['dtNascimento'] = this.contatoService.dateFormat(contato['dtNascimento']);
              this.contatos.push(contato);
              this.resetar();
            },
            error => {
              this.loading = false;
              console.error(error);
            }
          );
  }

  atualizar() {
    this.loading = true;
    this.contatoService
        .updateContato(this.contatos[this.index].id, this.form.value)
        .subscribe(
          () => {
            let updateContato = {
              id: this.contatos[this.index].id
            };

            Object.keys(this.form.controls)
                  .forEach(control => {
                    updateContato[control] = this.form.get(control).value;
                  });

            this.contatos[this.index] = updateContato;
            this.resetar();                    
          },

          error => {
            this.loading = false;
            console.error(error)
          }
        )
  }

  resetar() {
    this.form.reset();
    this.button = this.buttonsForm[0];
    this.loading = false;
  } 

  onSubmit() { 
    if(this.button.id == 1) {
      this.cadastrar();
    }
    
    if(this.button.id == 2) {      
      this.atualizar();
    }

  }
}
