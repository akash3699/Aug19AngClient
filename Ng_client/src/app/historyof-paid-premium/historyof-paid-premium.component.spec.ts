import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryofPaidPremiumComponent } from './historyof-paid-premium.component';

describe('HistoryofPaidPremiumComponent', () => {
  let component: HistoryofPaidPremiumComponent;
  let fixture: ComponentFixture<HistoryofPaidPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryofPaidPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryofPaidPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
