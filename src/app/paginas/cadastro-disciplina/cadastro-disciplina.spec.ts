import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDisciplina } from './cadastro-disciplina';

describe('CadastroDisciplina', () => {
  let component: CadastroDisciplina;
  let fixture: ComponentFixture<CadastroDisciplina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDisciplina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDisciplina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
