import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinasProfessor } from './disciplinas-professor';

describe('DisciplinasProfessor', () => {
  let component: DisciplinasProfessor;
  let fixture: ComponentFixture<DisciplinasProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisciplinasProfessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisciplinasProfessor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
