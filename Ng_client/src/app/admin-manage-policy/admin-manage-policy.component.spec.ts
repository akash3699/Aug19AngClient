import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagePolicyComponent } from './admin-manage-policy.component';

describe('AdminManagePolicyComponent', () => {
  let component: AdminManagePolicyComponent;
  let fixture: ComponentFixture<AdminManagePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
