import { Routes } from '@angular/router';

import { Home } from './paginas/home/home';
import { CadastroAluno } from './paginas/cadastro-aluno/cadastro-aluno';
import { CadastroProfessor } from './paginas/cadastro-professor/cadastro-professor';
import { CadastroDisciplina } from './paginas/cadastro-disciplina/cadastro-disciplina';
import { DisciplinasProfessor } from './paginas/disciplinas-professor/disciplinas-professor';
import { MateriaAlunosNotas } from './paginas/materia-alunos-notas/materia-alunos-notas';
import { MatricularAluno } from './paginas/matricular/matricular';

export const routes: Routes = [

  { path: '', component: Home },
  { path: 'cadastro-aluno', component: CadastroAluno },
  { path: 'cadastro-professor', component: CadastroProfessor },
  { path: 'cadastro-disciplina', component: CadastroDisciplina },
  { path: 'disciplinas-professor', component: DisciplinasProfessor },
  { path: 'materia-alunos-notas', component: MateriaAlunosNotas },
  { path: 'matricular', component: MatricularAluno },
];
