import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guardadas } from './guardadas';

describe('Guardadas', () => {
  let component: Guardadas;
  let fixture: ComponentFixture<Guardadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guardadas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guardadas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
