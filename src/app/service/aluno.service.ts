import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../model/Aluno';

@Injectable({ providedIn: 'root' })
export class AlunoService {

  //url base do backend para alunos
  private api = 'http://localhost:8080/api/aluno';

  constructor(private http: HttpClient) {}

  //cria um novo aluno no backend
  create(a: Aluno): Observable<any> {
    return this.http.post(this.api, a);
  }

  //busca todos os alunos cadastrados
  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.api + '/todos');
  }

  //busca aula por ID
  buscarAula(idAula: number): Observable<any> {
    return this.http.get<any>(`${this.api}/${idAula}`);
  }
}
