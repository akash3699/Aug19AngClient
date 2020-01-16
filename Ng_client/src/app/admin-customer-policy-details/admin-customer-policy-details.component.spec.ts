import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerPolicyDetailsComponent } from './admin-customer-policy-details.component';

describe('AdminCustomerPolicyDetailsComponent', () => {
  let component: AdminCustomerPolicyDetailsComponent;
  let fixture: ComponentFixture<AdminCustomerPolicyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCustomerPolicyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomerPolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
