import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProvinciaComponent } from './actualizar-provincia.component';

describe('ActualizarProvinciaComponent', () => {
  let component: ActualizarProvinciaComponent;
  let fixture: ComponentFixture<ActualizarProvinciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarProvinciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
