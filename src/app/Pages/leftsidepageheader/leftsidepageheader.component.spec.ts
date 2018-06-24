import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsidepageheaderComponent } from './leftsidepageheader.component';

describe('LeftsidepageheaderComponent', () => {
  let component: LeftsidepageheaderComponent;
  let fixture: ComponentFixture<LeftsidepageheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftsidepageheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsidepageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
