import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArsComponent } from './crear-ars.component';

describe('CrearArsComponent', () => {
  let component: CrearArsComponent;
  let fixture: ComponentFixture<CrearArsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearArsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearArsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
