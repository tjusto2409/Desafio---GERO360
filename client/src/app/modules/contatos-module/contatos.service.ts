import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }  

  getContatos() {
    return this.http.get(environment.url);
  }

  saveContato(contato) {
    return this.http.post(environment.url, contato, this.httpOptions);
  }

  updateContato(id, contato) {
    return this.http.put(environment.url + id, contato, this.httpOptions);
  }

  deleteContato(id) {
    return this.http.delete(environment.url + id, this.httpOptions);
  }

  generatorContato(contato) {
    return {
      nome: contato.nome,
      dtNascimento: this.dateFormat(contato.dtNascimento),
      celular: contato.celular,
      email: contato.email,
    }
  }

  dateFormat(date) {
    date = date.split('-');
    return `${date[2]}/${date[1]}/${date[0]}`
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
