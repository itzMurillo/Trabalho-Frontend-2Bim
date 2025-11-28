import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfessorService } from '../../service/professor.service';
import { MensagemService } from '../../service/mensagem.service';

@Component({
  selector: 'app-cadastro-professor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-professor.html',
  styleUrl: './cadastro-professor.css',
})
export class CadastroProfessor {

  //objeto usado no formulário
  prof = {
    matricula: '',
    nome: '',
    cpf: '',
    dtAdmissao: ''
  };

  constructor(
    private service: ProfessorService,
    private msg: MensagemService
  ) {}

  //envia os dados para o backend
  salvar() {
    this.service.create(this.prof).subscribe({
      next: () => this.msg.mostrar("Professor cadastrado!"),
      error: (err: any) =>
        this.msg.erro(err.error?.message || "Erro ao cadastrar professor")
    });
  }
}
