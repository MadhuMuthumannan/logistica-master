import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionlistviewComponent } from './transactionlistview.component';

describe('TransactionlistviewComponent', () => {
  let component: TransactionlistviewComponent;
  let fixture: ComponentFixture<TransactionlistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionlistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionlistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
