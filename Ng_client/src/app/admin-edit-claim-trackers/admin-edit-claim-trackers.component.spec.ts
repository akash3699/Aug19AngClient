import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditClaimTrackersComponent } from './admin-edit-claim-trackers.component';

describe('AdminEditClaimTrackersComponent', () => {
  let component: AdminEditClaimTrackersComponent;
  let fixture: ComponentFixture<AdminEditClaimTrackersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditClaimTrackersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditClaimTrackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
