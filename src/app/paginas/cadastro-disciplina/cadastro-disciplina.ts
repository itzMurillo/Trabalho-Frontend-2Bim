import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisciplinaService } from '../../service/disciplina.service';
import { ProfessorService } from '../../service/professor.service';
import { MensagemService } from '../../service/mensagem.service';

@Component({
  selector: 'app-cadastro-disciplina',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-disciplina.html',
  styleUrl: './cadastro-disciplina.css',
})
export class CadastroDisciplina implements OnInit {

  //lista de professores carregados do backend
  professores: any[] = [];

  //objeto da disciplina para preencher com o formulário
  disc = {
    codigo: '',
    nome: '',
    descricao: '',
    ementa: '',
    professorId: 0
  };

  constructor(
    private discService: DisciplinaService,
    private profService: ProfessorService,
    private msg: MensagemService
  ) {}

  //quando a tela abre, carrega a lista de professores
  ngOnInit(): void {
    this.profService.listar().subscribe({
      next: (res: any) => this.professores = res,
      error: () => this.msg.erro("Erro ao carregar professores")
    });
  }

  //salva a disciplina no backend
  salvar() {
    this.discService.create(this.disc).subscribe({
      next: () => this.msg.mostrar("Disciplina cadastrada!"),
      error: (err: any) =>
        this.msg.erro(err.error?.message || "Erro ao cadastrar disciplina")
    });
  }
}
