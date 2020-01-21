import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllClaimTrackersComponent } from './admin-all-claim-trackers.component';

describe('AdminAllClaimTrackersComponent', () => {
  let component: AdminAllClaimTrackersComponent;
  let fixture: ComponentFixture<AdminAllClaimTrackersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAllClaimTrackersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllClaimTrackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
