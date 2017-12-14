import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddearningsComponent } from './addearnings.component';

describe('AddearningsComponent', () => {
  let component: AddearningsComponent;
  let fixture: ComponentFixture<AddearningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddearningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddearningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
