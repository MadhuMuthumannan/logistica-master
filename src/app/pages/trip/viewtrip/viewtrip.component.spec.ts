import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtripComponent } from './viewtrip.component';

describe('ViewtripComponent', () => {
  let component: ViewtripComponent;
  let fixture: ComponentFixture<ViewtripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
