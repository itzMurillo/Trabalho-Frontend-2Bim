import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";
import { Falta } from "./Falta";

export interface Lancamento {
  aluno: Aluno;
  disciplina: Disciplina;
  notas: {
    bimestre1: number;
    bimestre2: number;
  };
  faltas: {
    bimestre1: Falta[];
    bimestre2: Falta[];
  };
}
