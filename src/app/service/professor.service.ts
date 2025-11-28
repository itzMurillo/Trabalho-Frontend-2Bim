import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../model/Professor';

@Injectable({ providedIn: 'root' })
export class ProfessorService {

  //rota base dos professores
  private api = 'http://localhost:8080/api/professor';

  constructor(private http: HttpClient) {}

  //cria um professor novo
  create(p: Professor): Observable<any> {
    return this.http.post(this.api, p);
  }

  //busca todos os professores cadastrados
  listar(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.api + '/todos');
  }
}
