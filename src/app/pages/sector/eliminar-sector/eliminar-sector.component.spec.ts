import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSectorComponent } from './eliminar-sector.component';

describe('EliminarSectorComponent', () => {
  let component: EliminarSectorComponent;
  let fixture: ComponentFixture<EliminarSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
