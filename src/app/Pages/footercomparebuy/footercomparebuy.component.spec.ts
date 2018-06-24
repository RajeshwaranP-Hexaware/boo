import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercomparebuyComponent } from './footercomparebuy.component';

describe('FootercomparebuyComponent', () => {
  let component: FootercomparebuyComponent;
  let fixture: ComponentFixture<FootercomparebuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootercomparebuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercomparebuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
