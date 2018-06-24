import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessfooterComponent } from './bussinessfooter.component';

describe('BussinessfooterComponent', () => {
  let component: BussinessfooterComponent;
  let fixture: ComponentFixture<BussinessfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinessfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
