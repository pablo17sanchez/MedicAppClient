import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElminarusuarioComponent } from './elminarusuario.component';

describe('ElminarusuarioComponent', () => {
  let component: ElminarusuarioComponent;
  let fixture: ComponentFixture<ElminarusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElminarusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElminarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
