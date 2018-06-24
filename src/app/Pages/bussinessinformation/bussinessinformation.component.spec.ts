import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessinformationComponent } from './bussinessinformation.component';

describe('BussinessinformationComponent', () => {
  let component: BussinessinformationComponent;
  let fixture: ComponentFixture<BussinessinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinessinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
