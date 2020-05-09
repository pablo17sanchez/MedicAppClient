import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimiarPacienteComponent } from './elimiar-paciente.component';

describe('ElimiarPacienteComponent', () => {
  let component: ElimiarPacienteComponent;
  let fixture: ComponentFixture<ElimiarPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElimiarPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimiarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
