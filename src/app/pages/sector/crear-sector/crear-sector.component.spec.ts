import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSectorComponent } from './crear-sector.component';

describe('CrearSectorComponent', () => {
  let component: CrearSectorComponent;
  let fixture: ComponentFixture<CrearSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
