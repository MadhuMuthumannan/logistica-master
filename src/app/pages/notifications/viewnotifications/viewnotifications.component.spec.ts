import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnotificationsComponent } from './viewnotifications.component';

describe('ViewnotificationsComponent', () => {
  let component: ViewnotificationsComponent;
  let fixture: ComponentFixture<ViewnotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
