import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPolicyDetailsComponent } from './admin-policy-details.component';

describe('AdminPolicyDetailsComponent', () => {
  let component: AdminPolicyDetailsComponent;
  let fixture: ComponentFixture<AdminPolicyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPolicyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
