import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPolicyComponent } from './admin-add-policy.component';

describe('AdminAddPolicyComponent', () => {
  let component: AdminAddPolicyComponent;
  let fixture: ComponentFixture<AdminAddPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
