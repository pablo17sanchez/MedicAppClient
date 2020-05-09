import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSectorComponent } from './actualizar-sector.component';

describe('ActualizarSectorComponent', () => {
  let component: ActualizarSectorComponent;
  let fixture: ComponentFixture<ActualizarSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
