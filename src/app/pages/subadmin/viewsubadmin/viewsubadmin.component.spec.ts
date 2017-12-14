import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubadminComponent } from './viewsubadmin.component';

describe('ViewsubadminComponent', () => {
  let component: ViewsubadminComponent;
  let fixture: ComponentFixture<ViewsubadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsubadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
