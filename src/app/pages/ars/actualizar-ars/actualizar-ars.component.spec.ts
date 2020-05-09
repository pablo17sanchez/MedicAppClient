import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarArsComponent } from './actualizar-ars.component';

describe('ActualizarArsComponent', () => {
  let component: ActualizarArsComponent;
  let fixture: ComponentFixture<ActualizarArsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarArsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarArsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
