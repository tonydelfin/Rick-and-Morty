import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBusquedaComponent } from './form-busqueda.component';

describe('FormBusquedaComponent', () => {
  let component: FormBusquedaComponent;
  let fixture: ComponentFixture<FormBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBusquedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
