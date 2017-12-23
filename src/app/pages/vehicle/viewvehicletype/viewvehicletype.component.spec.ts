import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvehicletypeComponent } from './viewvehicletype.component';

describe('ViewvehicletypeComponent', () => {
  let component: ViewvehicletypeComponent;
  let fixture: ComponentFixture<ViewvehicletypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvehicletypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvehicletypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
