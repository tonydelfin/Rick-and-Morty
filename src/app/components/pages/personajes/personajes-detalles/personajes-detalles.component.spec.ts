import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesDetallesComponent } from './personajes-detalles.component';

describe('PersonajesDetallesComponent', () => {
  let component: PersonajesDetallesComponent;
  let fixture: ComponentFixture<PersonajesDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
