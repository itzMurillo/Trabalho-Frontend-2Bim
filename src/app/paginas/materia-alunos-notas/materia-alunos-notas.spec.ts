import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaAlunosNotas } from './materia-alunos-notas';

describe('MateriaAlunosNotas', () => {
  let component: MateriaAlunosNotas;
  let fixture: ComponentFixture<MateriaAlunosNotas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaAlunosNotas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaAlunosNotas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
