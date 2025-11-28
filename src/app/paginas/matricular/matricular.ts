import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../service/aluno.service';
import { DisciplinaService } from '../../service/disciplina.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './matricular.html',
  styleUrl: './matricular.css',
})
export class MatricularAluno implements OnInit {

  //listas que vão receber todos os alunos e disciplinas do backend
  alunos: any[] = [];
  disciplinas: any[] = [];
  //IDs selecionados no dropdown (aquela caixinha de seleção onde escolho uma opção da lista)
  alunoId!: number;
  disciplinaId!: number;

  constructor(
    private alunoService: AlunoService,    //pega lista de alunos
    private discService: DisciplinaService //pega lista de disciplinas e faz matrícula
  ) {}

  //quando a tela carrega, busca todas as opções de alunos e disciplinas
  ngOnInit() {
    this.alunoService.listar().subscribe(r => this.alunos = r);
    this.discService.listar().subscribe(r => this.disciplinas = r);
  }

  //metodo chamado ao clicar no botão "Matricular"
  matricular() {
    // Envia alunoId + disciplinaId para o backend
    this.discService.matricular(this.alunoId, this.disciplinaId)
      .subscribe(() => alert("Aluno matriculado com sucesso!"));
  }
}
