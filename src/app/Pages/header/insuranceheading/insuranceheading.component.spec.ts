import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceheadingComponent } from './insuranceheading.component';

describe('InsuranceheadingComponent', () => {
  let component: InsuranceheadingComponent;
  let fixture: ComponentFixture<InsuranceheadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceheadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
