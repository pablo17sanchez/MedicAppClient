import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarArsComponent } from './eliminar-ars.component';

describe('EliminarArsComponent', () => {
  let component: EliminarArsComponent;
  let fixture: ComponentFixture<EliminarArsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarArsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarArsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
