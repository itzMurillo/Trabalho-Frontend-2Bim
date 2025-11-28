import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  //rota base dos lançamentos (notas e faltas)
  private api = 'http://localhost:8080/api/lancamento';

  constructor(private http: HttpClient) {}

  //atualiza as informações do 1 bimestre do aluno
  atualizar1Bimestre(idAluno: number, idDisciplina: number, body: any): Observable<any> {
    return this.http.put(`${this.api}/${idAluno}/${idDisciplina}/1bim`, body);
  }

  //atualiza as informações do 2 bimestre do aluno
  atualizar2Bimestre(idAluno: number, idDisciplina: number, body: any): Observable<any> {
    return this.http.put(`${this.api}/${idAluno}/${idDisciplina}/2bim`, body);
  }
}
