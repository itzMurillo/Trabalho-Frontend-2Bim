import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DisciplinaService } from '../../service/disciplina.service';
import { LancamentoService } from '../../service/lancamento.service';

@Component({
  standalone: true,
  selector: 'app-materia-alunos-notas',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './materia-alunos-notas.html',
  styleUrl: './materia-alunos-notas.css',
})
export class MateriaAlunosNotas implements OnInit {

  nomeMateria = ""; //nome da matéria digitado dentro da página
  disciplina: any = null; //guarda a disciplina encontrada
  alunos: any[] = []; //lista de alunos matriculados na disciplina
  alunoSelecionado: any = null; //guarda o aluno selecionado na lista
  //notas dos dois bimestres
  nota1 = 0;
  nota2 = 0;
  //média calculada automaticamente
  media = 0;
  //listas de datas usadas apenas para exibir no front
  faltas1Selecionadas: Date[] = [];
  faltas2Selecionadas: Date[] = [];

  constructor(
    private discService: DisciplinaService,  //busca disciplina e alunos
    private lancService: LancamentoService,  //salva notas e faltas
    private route: ActivatedRoute            //pega query params
  ) {}

  //quando entra na página, já verifica se veio nome pela URL
  ngOnInit(): void {
    const nome = this.route.snapshot.queryParamMap.get('nome');
    if (nome) {
      this.nomeMateria = nome;
      this.buscarMateria();
    }
  }

  //busca a matéria no backend pelo nome digitado
  buscarMateria() {
    this.discService.buscarPorMateria(this.nomeMateria).subscribe((res: any[]) => {

      //se não encontrar nada
      if (!res || res.length === 0) {
        alert("Nenhuma matéria encontrada!");
        return;
      }
      //seleciona a primeira matéria encontrada
      this.disciplina = res[0];
      //carrega os alunos matriculados na disciplina
      this.discService.listarMatriculados(this.disciplina.id)
        .subscribe((lista: any[]) => {
          this.alunos = lista;
        });
    });
  }

  //quando clica em um aluno na lista
  selecionarAluno(rel: any) {
    this.alunoSelecionado = rel;
    //puxa as notas já salvas
    this.nota1 = rel.nota1Bim || 0;
    this.nota2 = rel.nota2Bim || 0;

    //como o backend salva apenas o número de faltas,
    //aqui cria datas fictícias só para exibir a quantidade
    this.faltas1Selecionadas = Array(rel.faltas1Bim || 0)
      .fill(0).map((_, i) => new Date(new Date().getFullYear(), 0, i + 1));
    this.faltas2Selecionadas = Array(rel.faltas2Bim || 0)
      .fill(0).map((_, i) => new Date(new Date().getFullYear(), 0, i + 1));
    this.calcularMedia();
  }

  //calcula a média simples das duas notas
  calcularMedia() {
    this.media = (this.nota1 + this.nota2) / 2;
  }

  //adiciona uma falta escolhendo a data no input
  adicionarFalta1(event: any) {
    const data = new Date(event.target.value);

    if (!isNaN(data.getTime())) {
      //não deixa que a mesma data seja adicionada duas vezes
      if (!this.faltas1Selecionadas.find(d => d.getTime() === data.getTime())) {
        this.faltas1Selecionadas.push(data);
      }
    }
  }

  //remove uma falta (1 bim)
  removerFalta1(data: Date) {
    this.faltas1Selecionadas =
      this.faltas1Selecionadas.filter(d => d.getTime() !== data.getTime());
  }

  //adiciona falta (2 bim)
  adicionarFalta2(event: any) {
    const data = new Date(event.target.value);

    if (!isNaN(data.getTime())) {
      if (!this.faltas2Selecionadas.find(d => d.getTime() === data.getTime())) {
        this.faltas2Selecionadas.push(data);
      }
    }
  }

  //remove falta (2 bim)
  removerFalta2(data: Date) {
    this.faltas2Selecionadas =
      this.faltas2Selecionadas.filter(d => d.getTime() !== data.getTime());
  }

  //envia notas e quantidade de faltas do 1 bimestre pro backend
  salvar1() {
    const body = {
      nota1Bim: this.nota1,
      faltas1Bim: this.faltas1Selecionadas.length  // envia só a quantidade
    };
    this.lancService
      .atualizar1Bimestre(this.alunoSelecionado.aluno.id, this.disciplina.id, body)
      .subscribe(() => alert("1º Bimestre salvo!"));
  }

  //envia notas e faltas do 2 bimestre
  salvar2() {
    const body = {
      nota2Bim: this.nota2,
      faltas2Bim: this.faltas2Selecionadas.length
    };
    this.lancService
      .atualizar2Bimestre(this.alunoSelecionado.aluno.id, this.disciplina.id, body)
      .subscribe(() => {
        alert("2º Bimestre salvo!");
        this.calcularMedia();
      });
  }

  get situacaoCor() {
    switch (this.alunoSelecionado?.situacao) {
      case 'APROVADO': return 'green';
      case 'REPROVADO': return 'red';
      default: return 'blue';
    }
  }
}
