import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MensagemService {

  //mostra mensagem simples de sucesso
  mostrar(msg: string) {
    alert("✔ " + msg);
  }

  //mostra mensagem de erro personalizada
  erro(msg: string) {
    alert("❌ ERRO: " + msg);
  }
}
