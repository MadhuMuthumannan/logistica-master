import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewearningsComponent } from './viewearnings.component';

describe('ViewearningsComponent', () => {
  let component: ViewearningsComponent;
  let fixture: ComponentFixture<ViewearningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewearningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewearningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
