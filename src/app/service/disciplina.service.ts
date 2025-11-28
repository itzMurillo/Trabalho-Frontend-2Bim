import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DisciplinaService {

  //url base da api de disciplinas
  private api = 'http://localhost:8080/api/disciplina';

  constructor(private http: HttpClient) {}

  //cria a disciplina no backend
  create(disc: any): Observable<any> {
    return this.http.post(this.api, disc);
  }

  //cusca todas as disciplinas cadastradas
  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/todas`);
  }

  //busca disciplina pelo id
  buscar(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  //exclui uma disciplina pelo id
  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  //busca disciplina pelo nome
  buscarPorMateria(nome: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/disciplina/nome/${nome}`);
  }

  //lista todos os alunos matriculados nessa disciplina
  listarMatriculados(idDisc: number) {
    return this.http.get<any[]>(`http://localhost:8080/api/lancamento/disciplina/${idDisc}`);
  }

  //matricula um aluno na disciplina
  matricular(alunoId: number, disciplinaId: number) {
    return this.http.post('http://localhost:8080/api/lancamento/matricular', {
      alunoId,
      disciplinaId
    });
  }
}
