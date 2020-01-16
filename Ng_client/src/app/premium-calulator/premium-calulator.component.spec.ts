import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumCalulatorComponent } from './premium-calulator.component';

describe('PremiumCalulatorComponent', () => {
  let component: PremiumCalulatorComponent;
  let fixture: ComponentFixture<PremiumCalulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumCalulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumCalulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
