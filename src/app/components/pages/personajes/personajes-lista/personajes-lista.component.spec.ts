import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesListaComponent } from './personajes-lista.component';

describe('PersonajesListaComponent', () => {
  let component: PersonajesListaComponent;
  let fixture: ComponentFixture<PersonajesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
