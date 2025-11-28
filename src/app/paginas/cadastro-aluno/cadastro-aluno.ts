import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../../service/aluno.service';
import { MensagemService } from '../../service/mensagem.service';

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-aluno.html',
  styleUrl: './cadastro-aluno.css',
})
export class CadastroAluno {

  //objeto que recebe os dados digitados no formulario
  aluno = {
    ra: '',
    nome: '',
    dtNascimento: '',
    curso: ''
  };

  //injeção dos serviços
  constructor(
    private alunoService: AlunoService,
    private msg: MensagemService
  ) {}

  //metodo chamado quando o usuário clica em salvar
  salvar() {
    //envio dos dados para o backend usando o service
    this.alunoService.create(this.aluno).subscribe({
      next: () => this.msg.mostrar("Aluno cadastrado com sucesso!"),
      error: (err: any) =>
        this.msg.erro(err.error?.message || "Falha ao cadastrar aluno")
    });
  }
}
