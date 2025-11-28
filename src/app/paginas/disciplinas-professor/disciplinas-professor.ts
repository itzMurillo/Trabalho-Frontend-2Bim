import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisciplinaService } from '../../service/disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplinas-professor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './disciplinas-professor.html',
  styleUrl: './disciplinas-professor.css',
})
export class DisciplinasProfessor {

  //nome digitado no campo de busca
  nomeDisciplina = "";
  //lista onde vau guardar as disciplinas encontradas
  disciplinas: any[] = [];
  //flag para saber se já terminou a busca
  carregado = false;

  constructor(
    private discService: DisciplinaService, //chama o backend
    private router: Router                  //usado para navegar para outra tela
  ) {}

  //metodo chamado quando clica no botão "Buscar"
  buscar() {
    this.discService.buscarPorMateria(this.nomeDisciplina).subscribe({

      //se deu certo, atualiza a lista com os resultados
      next: (res: any) => {
        this.disciplinas = res;
        this.carregado = true; //indica que terminou a busca
      },
      //se deu erro ou não encontrou nada
      error: () => {
        this.disciplinas = [];
        this.carregado = true;
        alert("Nenhuma disciplina encontrada.");
      }
    });
  }

  //abre a tela de lançamento de notas/faltas enviando a matéria escolhida
  abrirMateria(disciplina: any) {
    this.router.navigate(['/materia-alunos-notas'], {
      queryParams: { nome: disciplina.nome } //passa o nome pela url
    });
  }
}
