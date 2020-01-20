import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimTrackerComponent } from './claim-tracker.component';

describe('ClaimTrackerComponent', () => {
  let component: ClaimTrackerComponent;
  let fixture: ComponentFixture<ClaimTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
