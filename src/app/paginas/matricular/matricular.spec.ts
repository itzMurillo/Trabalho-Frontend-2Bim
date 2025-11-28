import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matricular } from './matricular';

describe('Matricular', () => {
  let component: Matricular;
  let fixture: ComponentFixture<Matricular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matricular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matricular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
