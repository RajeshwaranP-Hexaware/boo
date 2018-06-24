import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveragefooterComponent } from './coveragefooter.component';

describe('CoveragefooterComponent', () => {
  let component: CoveragefooterComponent;
  let fixture: ComponentFixture<CoveragefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoveragefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveragefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
