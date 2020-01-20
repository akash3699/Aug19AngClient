import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddClaimTrackerComponent } from './admin-add-claim-tracker.component';

describe('AdminAddClaimTrackerComponent', () => {
  let component: AdminAddClaimTrackerComponent;
  let fixture: ComponentFixture<AdminAddClaimTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddClaimTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddClaimTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
